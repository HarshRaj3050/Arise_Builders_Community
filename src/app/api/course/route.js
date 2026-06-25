import dbConnect from "@/lib/dbConnect";
import CourseRegistration from "@/models/courseModel";

export async function POST(req) {
  await dbConnect();

  try {
    const body = await req.json();
    const { fullName, email, phone, collegeRegNumber, college, branch } = body;

    // Basic required field check
    if (!fullName || !email || !phone || !collegeRegNumber || !college || !branch) {
      return Response.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Check for duplicate email
    const existingEmail = await CourseRegistration.findOne({ email });
    if (existingEmail) {
      return Response.json(
        { message: "This email is already registered." },
        { status: 409 }
      );
    }

    // Check for duplicate college registration number
    const existingRegNo = await CourseRegistration.findOne({ collegeRegNumber });
    if (existingRegNo) {
      return Response.json(
        { message: "This college registration number is already registered." },
        { status: 409 }
      );
    }

    // Save to DB
    const registration = await CourseRegistration.create({
      fullName,
      email,
      phone,
      collegeRegNumber,
      college,
      branch,
    });

    return Response.json(
      {
        message: "Registration successful!",
        data: registration,
      },
      { status: 201 }
    );
  } catch (error) {
    // Mongoose validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return Response.json(
        { message: messages.join(", ") },
        { status: 422 }
      );
    }

    return Response.json(
      { message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}