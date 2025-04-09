import { model, Schema } from "mongoose";

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

studentSchema.virtual("devices", {
  ref: "device",
  localField: "_id",
  foreignField: "student",
});

studentSchema.set("toJSON", { virtuals: true });
studentSchema.set("toObject", { virtuals: true });

const Student = model("student", studentSchema);

export { Student };
