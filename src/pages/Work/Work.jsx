import { FaDotCircle } from "react-icons/fa";
import "./work.css";
import CompanyWorks from "../../components/CompanyWorks/CompanyWorks";
import { useEffect } from "react";

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="workExperience">
      <div className="workexContainer">
        <div className="company">
          <div className="compHeader">
            <img src="/oracle.png" alt="oracle Logo" className="compLogo" />
            <div className="timeLine">
              <span className="pos">Associate Software Engineer</span>
              <span className="dates">AUGUST 2024 ONWARDS</span>
            </div>
          </div>
          <div className="aboutWork">
            <div className="team">
              Working at Oracle as an Associate Software Engineer in the
              Customer Success Services(CSS) department. CSS is completely
              integrated with Oracle's product development teams to help
              customers with their specific requirements in Oracle's fully
              integrated technology solutions.
            </div>
            <div className="mywork">
              <CompanyWorks
                workTitle="CONTRIBUTIONS/LEARNING"
                listEle={
                  <ul>
                    <li>
                      Built an automated reconciliation workflow using Oracle
                      Integration Cloud (OIC) and SQL to fetch and validate file
                      counts from remote SFTP folders — eliminated manual
                      Excel-based tasks and increased efficiency by over 50%.
                      Enhanced maintainability of OIC integrations by
                      parameterizing hard-coded values, designing lookups —
                      improved scalability and reduced long-term tech debt.
                    </li>
                    <li>
                      Designed and developed FastAPI services in Python to
                      process and extract structured data (text & speech) from
                      formats like PDFs and audio, and generate tokenized
                      outputs in JSON for downstream business processes.
                    </li>
                    <li>
                      Gained hands-on experience in middleware design —
                      architecting integrations and APIs that sit between
                      front-end apps and backend services, following enterprise
                      workflow patterns & developed an end-to-end understanding
                      of application integration pipelines, including input
                      validation, transformation, orchestration, and external
                      system communication.
                    </li>
                    <li>
                      Technologies used: Oracle Integration Cloud, PL/SQL,
                      Oracle Cloud Infrastructure, Javascript, Oracle Visual
                      Builder. Completed Oracle Certifications - Oracle
                      Integrations Cloud Professional & Oracle Redwood
                      Application Developer.
                    </li>
                  </ul>
                }
              ></CompanyWorks>
              <CompanyWorks
                workTitle={"HOW I GOT HIRED?"}
                listEle={
                  <ul>
                    <li>
                      <b>THE ONLINE ASSESSMENT: </b>The online assessment had a
                      couple of Data Structured & Algorithms based questions,
                      followed by a SQL question and finally a Rest API problem.
                      Was able to solve all the questions within the stipulated
                      time.
                    </li>
                    <li>
                      <b>THE INTERVIEWS: </b>After the online assessment I was
                      shortlisted for an interview which was rescheduled once.
                      There were 3 rounds of interviews, all on a zoom call.{" "}
                      <br></br>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First
                      round was a DSA based round, there was a single
                      interviewer whos asked me some questions based on my
                      resume, my internship at INTEL (I was an intern at Intel
                      at that time) and projects on my resume. Then proceeded to
                      a Binary Search based DSA question, which I explained the
                      intuition and then proceeded to solve. After 2 rounds of
                      debugging got the AC solution. Ended the round with a
                      smile. <br></br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      The Second Round was a bit more conceptual. Questions were
                      asked from all my projects in the resume and they were
                      in-depth questions about the tech-stack used,
                      functionalities and goal of the project. After about 45
                      mins of in depth discussion, the round ended. Core
                      Questions like distributed computing, Networking and OS
                      were also asked.<br></br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      The third and final round was a short 10 minute HR
                      discussion, they asked about my location preferences, work
                      permits and other general information about my current
                      internship.
                    </li>
                  </ul>
                }
              ></CompanyWorks>
            </div>
          </div>
        </div>
        <div className="company">
          <div className="compHeader">
            <img
              src="/intel.png"
              alt="oracle Logo"
              className="compLogo intelLogo"
            />
            <div className="timeLine">
              <span className="pos">Software Intern</span>
              <span className="dates">JANUARY 2024 - JUNE 2024</span>
            </div>
          </div>
          <div className="aboutWork">
            <div className="team teamIntel">
              At Intel, I worked in the GRC Platforms team, which was a part of
              Cyberdefenders Org. The GRC Platfoms team worked on securing
              Intel's internal data and worked with systems to monitor
              cybersecurity incidents and generate data that the functional
              teams would work on.
            </div>
            <div className="mywork">
              <CompanyWorks
                workTitle="CONTRIBUTIONS/LEARNING"
                listEle={
                  <ul>
                    <li>
                      Optimized legacy SSIS automation workflows by analyzing
                      existing data pipelines and identifying inefficiencies in
                      SQL-based logic. Refactored complex transformation logic
                      and migrated it into modular, reusable C# scripts using
                      SSIS Script Tasks, resulting in the elimination of over 45
                      redundant stored procedures. This effort significantly
                      reduced database storage usage by 20% and improved
                      maintainability. Despite the architecture shift,
                      performance was either preserved or enhanced through
                      careful testing, memory management, streamlined data flows
                      and optimized database assets .
                    </li>
                    <li>
                      Designed and built a custom Intel-branded email template
                      using React components, which was integrated with SSIS
                      jobs to automate internal communications — improved
                      consistency and branding across emails sent to 300+
                      stakeholders. Gained hands-on exposure to enterprise
                      automation, data pipeline refactoring, and governance/risk
                      systems — developed a strong understanding of large-scale
                      corporate IT workflows and performance tuning.
                    </li>
                    <li>
                      Worked on RSA Archer GRC platform, implementing features
                      like SOX compliance, Controls & Assessments, and automated
                      datafeeds — resolved 50+ monthly incidents with 100% SLA
                      adherence, ensuring seamless governance and compliance
                      operations.
                    </li>
                    <li>
                      Technologies used: C#, PL/SQL, MS SQL Server Integration,
                      ReactJS, RSA Archer. Received 2 performance recognitions
                      from Intel leadership for successfully delivering a key
                      result by optimizing internal systems, enabling data
                      integration layers, and driving end-to-end
                      automation—significantly contributing to tech debt
                      reduction.
                    </li>
                  </ul>
                }
              ></CompanyWorks>
              <CompanyWorks
                workTitle={"HOW I GOT HIRED?"}
                listEle={
                  <ul>
                    <li>
                      One fine Tuesday morning, in October 2023, my phone rang
                      and I got informed that my profile has been shortlisted at
                      Intel India, and asked me to provide a time for scheduling
                      the 'Technical Evaluation'. I had applied my resume for
                      6-Month internship a week prior. I confirmed it for the
                      next day and recieved a MS Teams meet invite.
                    </li>
                    <li>
                      <b>THE INTERVIEW:</b> It was a panel interview which
                      lasted about an hour. There were three members in the
                      teams meeting. The question were mostly related to my
                      projects and core subjects at college including questions
                      on Network Security, Authentication/Authorization systems,
                      DBMS. Then shifted to SQL questions. At the end was asked
                      to debug a few queries.
                    </li>
                  </ul>
                }
              ></CompanyWorks>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
