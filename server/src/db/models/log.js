import { model, Schema } from "mongoose";

const logSchema = new Schema(
  {
    device: {
      type: Schema.Types.ObjectId,
      ref: "device",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const Log = model("log", logSchema);

export { Log };
