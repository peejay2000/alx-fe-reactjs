import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // Yup validation schema
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting, setStatus }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      console.log("User registered with Formik:", data);
      alert("User registered successfully with Formik!");

      resetForm();
      setStatus({ success: true });
    } catch (err) {
      console.error("Error:", err);
      setStatus({ success: false, error: "Something went wrong!" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form className="flex flex-col gap-4 w-80 p-4 border rounded-lg shadow">
            <h2 className="text-xl font-bold text-center">Formik Registration</h2>

            {status?.error && <p className="text-red-500">{status.error}</p>}

            <div>
              <Field name="username" placeholder="Username" className="border p-2 rounded w-full" />
              <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
            </div>

            <div>
              <Field name="email" type="email" placeholder="Email" className="border p-2 rounded w-full" />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
            </div>

            <div>
              <Field name="password" type="password" placeholder="Password" className="border p-2 rounded w-full" />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600 disabled:opacity-50"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
