import { model, Schema } from "mongoose";

const deviceSchema = new Schema(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

deviceSchema.virtual("logs", {
  ref: "log",
  localField: "_id",
  foreignField: "device",
});

deviceSchema.set("toJSON", { virtuals: true });
deviceSchema.set("toObject", { virtuals: true });

const Device = model("device", deviceSchema);

export { Device };
