import { createMachine, interpret, assign } from "xstate";

const MAX_DURATION = 30000;

const resetButton = document.querySelector("#reset");
const slider = document.querySelector("#slider");
const output = document.querySelector("#output");
const guage = document.querySelector("#guage");

const machine = createMachine(
  {
    initial: "active",
    context: {
      elapsedTime: 0,
      max: 3.0,
    },
    states: {
      active: {
        invoke: {
          id: "addTenth",
          src: (ctx, event) => (callback, onReceive) => {
            const id = setInterval(() => callback("ADD_TENTH"), 100);
            return () => clearInterval(id);
          },
        },
        on: {
          ADD_TENTH: [
            {
              cond: (ctx, event) => (ctx.elapsedTime < 30 ? false : true),
              target: "elapsed",
            },
            {
              actions: assign({
                elapsedTime: (ctx, event) => {
                  const next = ctx.elapsedTime + 0.1;
                  return +next.toFixed(2);
                },
              }),
            },
          ],
          RESET: {
            actions: assign({ elapsedTime: 0 }),
          },
          SET_MAX: {
            actions: assign({ max: (c, e) => e.value }),
          },
        },
      },
      elapsed: {
        on: {
          RESET: {
            actions: assign({ elapsedTime: 0 }),
            target: "active",
          },
          SET_MAX: {
            actions: assign({ max: (c, e) => e.value }),
          },
        },
      },
    },
  },
  {}
);

const service = interpret(machine).start();
service.onTransition((state) => {
  const { elapsedTime, max } = state.context;
  console.log("max is", max);

  if (elapsedTime >= max) {
    output.innerHTML = `${max}s`;
    guage.style.width = "100%";
  } else {
    output.innerHTML = `${elapsedTime}s`;
    guage.style.width = `${(elapsedTime / max) * 100}%`;
  }
});

resetButton.addEventListener("click", () => {
  service.send("RESET");
});

slider.addEventListener("input", (e) => {
  service.send({ type: "SET_MAX", value: e.target.valueAsNumber });
});
