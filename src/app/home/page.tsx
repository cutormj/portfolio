
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import NavBar from "@/components/NavBar";
import { Button } from "@nextui-org/react";

const HomePage = async () => {
    const session = await auth();

    if (!session || !session.user) {
        redirect("/");
        return null; // Ensure the component doesn't render if redirecting
    }

    const { user } = session;

    const navUser = {
        name: user.name ?? 'No Name',
        email: user.email ?? 'No Email',
        image: user.image ?? 'No Image',
    }

    return (
        <div className="theme-mint grid grid-cols-12 grid-rows-8 gap-0">
            <div className="col-span-12">
                {/* <NavBar user={navUser}/> */}
                <NavBar user={navUser}/>
            </div>
            <div className="col-span-12 row-span-7 row-start-2">
                <Button color="primary">Test</Button>
            </div>
        </div>
        // <div className="">
        //     <NavBar user={navUser}/>
        //     {/* <InitiateWebsite initiator={navUser.email} /> */}
        // </div>
    );
};

export default HomePage;


