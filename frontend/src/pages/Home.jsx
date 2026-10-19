import {Hero} from "../Components/Hero"
import {Benefits} from "../Components/Benefits"
import {WorkFlow} from "../Components/WorkFlow"
import {CTA} from "../Components/CTAsection"
export const Home = () => {
    return (
        <div>
            <Hero/>
            <Benefits/>
            <WorkFlow/>
            <CTA/>
        </div>
    )
}