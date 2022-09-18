import { Gantt } from "@bryntum/gantt";
import "@bryntum/gantt/gantt.stockholm.min.css";

const gantt = new Gantt({
  appendTo: document.body,
  // startDate: new Date(2022, 9, 1),
  // endDate: new Date(2022, 10, 20),

  project: {
    transport: {
      load: {
        url: "data/data.json",
      },
    },
    autoLoad: true,
  },

  columns: [{ type: "name", width: 250 }],
});
