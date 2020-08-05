import { createMachine, interpret, assign, send, actions } from "xstate";
const { choose } = actions;

const resetButton = document.querySelector("#reset");
const slider = document.querySelector("#slider");
const output = document.querySelector("#output");
const guage = document.querySelector("#guage");

const MAX_DURATION = 30; // in seconds .. after this amount of time the interval will be cleared

const machine = createMachine({
  initial: "active",
  context: {
    clock: 0,
    slider: 15.0,
    interval: 100, // in milliseconds
  },
  states: {
    active: {
      // invoke an actor which sends events back to parent at regular intervals
      invoke: {
        id: "ticker",
        src: (ctx) => (callback, receive) => {
          const id = setInterval(() => callback("TICK"), ctx.interval);
          receive((e) => {
            if (e.type === "CLEAR_INTERVAL") clearInterval(id);
          });
        },
      },
      on: {
        TICK: {
          actions: choose([
            {
              cond: (ctx) => ctx.clock >= MAX_DURATION,
              actions: send("CLEAR_INTERVAL", { to: "ticker" }),
            },
            {
              actions: assign({
                clock: (ctx) => +(ctx.clock + ctx.interval / 1000).toFixed(1),
              }),
            },
          ]),
        },
        // reset the clock on RESET
        // max will stay the same
        RESET: {
          actions: assign({ clock: 0 }),
        },
        // set max on range input update
        SET_MAX: {
          actions: assign({ slider: (_, e) => e.value }),
        },
      },
    },
  },
});

const service = interpret(machine).start();
service.onTransition((state) => {
  const { clock, slider } = state.context;

  if (clock >= slider) {
    output.innerHTML = `${slider}s`;
    guage.style.width = "100%";
  } else {
    output.innerHTML = `${clock}s`;
    guage.style.width = `${(clock / slider) * 100}%`;
  }
});

resetButton.addEventListener("click", () => {
  service.send("RESET");
});

slider.addEventListener("input", (e) => {
  service.send({ type: "SET_MAX", value: e.target.valueAsNumber });
});

slider.value = machine.initialState.context.slider;
