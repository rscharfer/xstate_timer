import { createMachine, interpret, assign } from "xstate";

const resetButton = document.querySelector("#reset");
const slider = document.querySelector("#slider");
const output = document.querySelector("#output");
const guage = document.querySelector("#guage");

const MAX_DURATION = 30; // in seconds

const machine = createMachine({
  initial: "active",
  context: {
    clock: 0,
    max: 15.0,
    interval: 100, // in milliseconds
  },
  states: {
    active: {
      // invoke an actor which sends events back to parent at regular intervals
      // the interval will be cleared when the state transitions away from active
      invoke: {
        src: (ctx) => (callback) => {
          const id = setInterval(() => callback("TICK"), ctx.interval);
          return () => clearInterval(id);
        },
      },
      on: {
        // null event
        // whenever the state is transitioned to, check to see if we need to move to a different state
        "": {
          cond: (ctx) => (ctx.clock >= MAX_DURATION ? true : false),
          target: "elapsed",
        },
        // when the parent receives a TICK from the actor,
        // parent will update its context
        TICK: {
          actions: assign({
            clock: (ctx) => +(ctx.clock + ctx.interval / 1000).toFixed(1), // add .1 to the current value + make it a string with two places, convert it back to a number
          }),
        },
        // reset the clock on RESET
        // max will stay the same
        RESET: {
          actions: assign({ clock: 0 }),
        },
        // set max on range input update
        SET_MAX: {
          actions: assign({ max: (_, e) => e.value }),
        },
      },
    },
    // this state is really only here to clean up the interval
    elapsed: {
      on: {
        RESET: {
          actions: assign({ clock: 0 }),
          target: "active",
        },
        SET_MAX: {
          actions: assign({ max: (c, e) => e.value }),
        },
      },
    },
  },
});

const service = interpret(machine).start();
service.onTransition((state) => {
  const { clock, max } = state.context;

  if (clock >= max) {
    output.innerHTML = `${max}s`;
    guage.style.width = "100%";
  } else {
    output.innerHTML = `${clock}s`;
    guage.style.width = `${(clock / max) * 100}%`;
  }
});

resetButton.addEventListener("click", () => {
  service.send("RESET");
});

slider.addEventListener("input", (e) => {
  service.send({ type: "SET_MAX", value: e.target.valueAsNumber });
});
