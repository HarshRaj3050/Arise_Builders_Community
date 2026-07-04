import mongoose from "mongoose";

const courseRegistrationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [3, "Full name must be at least 3 characters"],
      maxlength: [100, "Full name must not exceed 100 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
        "Please enter a valid email address",
      ],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [
        /^[+]?[\d\s\-().]{7,15}$/,
        "Please enter a valid phone number",
      ],
    },

    collegeRegNumber: {
      type: String,
      required: [true, "College registration number is required"],
      trim: true,
      unique: true,
    },

    college: {
      type: String,
      required: [true, "College or university name is required"],
      trim: true,
      maxlength: [200, "College name must not exceed 200 characters"],
    },

    branch: {
      type: String,
      required: [true, "Branch is required"],
      trim: true,
      maxlength: [100, "Branch name must not exceed 100 characters"],
    },

    linkedin: {
      type: String,
      required: [true, "LinkedIn is required"],
      trim: true,
      default: "",
    },

    github: {
      type: String,
      required: [true, "Github is required"],
      trim: true,
      default: "",
    },

    reason: {
      type: String,
      required: [true, "Why should you join"],
      trim: true,
      default: "",
    }

  },
  {
    timestamps: true,
  }
);

if (mongoose.models.CourseRegistration) {
  delete mongoose.models.CourseRegistration;
}

const CourseRegistration = mongoose.model(
  "CourseRegistration",
  courseRegistrationSchema
);

export default CourseRegistration;