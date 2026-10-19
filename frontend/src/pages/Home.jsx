import {Hero} from "../Sections/Hero"
import {Benefits} from "../Sections/Benefits"
import {WorkFlow} from "../Sections/WorkFlow"
import {CTA} from "../Sections/CTAsection"
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