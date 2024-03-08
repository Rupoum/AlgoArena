import CompletedCourses from "@/components/dashboard/CompletedCourses";
import Navbar from "@/components/ui/Navbar";

export default function dashboard() {
  return (
    <>
      <Navbar />
      <CompletedCourses username="AYUSH RANJAN"></CompletedCourses>
    </>
  );
}