import { createMachine, interpret, assign } from "xstate";

const machine = createMachine(
  {
    initial: "active",
    context: {
      elapsedTime: 0,
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
              cond: (ctx, event) => (ctx.elapsedTime < 5 ? false : true),
              target: "final",
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
        },
      },
      final: {
        type: "final",
      },
    },
  },
  {
    // actions: {
    //   kickOffTimer: (ctx, event) => {
    //     const id = setInterval(() => {
    //       if (ctx.elapsedTime < 1) {
    //         assign({
    //           elapsedTime: (ctx) => ctx.elapsedTime + 0.1,
    //         });
    //       } else clearTimeout(id);
    //     }, 100);
    //   },
    // },
  }
);

const service = interpret(machine).start();
service.onTransition((state) =>
  console.log("context is", state.context.elapsedTime)
);
