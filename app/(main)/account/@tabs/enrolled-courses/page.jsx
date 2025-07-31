import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import EnrolledCourseCard from "../../component/enrolled-coursecard";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getEnrollmentsForUser } from "@/queries/enrollment";
import { getUserByEmail } from "@/queries/users";

async function EnrolledCourses() {

	const session = await auth();
	if(!session?.user){
		redirect("/login");
	}

	const loggedInUser = await getUserByEmail(session?.user?.email);
	const enrollments = await getEnrollmentsForUser(loggedInUser?.id)

	return (
		<div className="grid sm:grid-cols-2 gap-6">
			{
				enrollments && enrollments.length > 0 ?(
					<>
					{ enrollments.map((enrollment) => (
						<EnrolledCourseCard key={enrollment?.id} enrollment={enrolment} />
					))

					}
					</>
				) : (
					<p className="font-bold text-red-700">No Enrollments Found...</p>
				)
			}
		
		</div>
	);
}

export default EnrolledCourses;
