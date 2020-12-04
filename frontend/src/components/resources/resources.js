import React from 'react';
import NavBarContainer from '../nav/navbar_container';
import '../style/resources.css'

class Resources extends React.Component {

    // BACKGROUND => PINK
    // 911 => RED
    // Resource Numbers => Flex-start
    // Resource Links => Flex-end
    render() {

        return (
          <div className="resource-page">
            <NavBarContainer />
            <h1>Do you need help now?</h1>
            <div className="resource-wrap">
            <div className="mental-health-service">
            <h2>24/7 Mental Health Service Lines:</h2>
                <p class="color-red">Emergency: 911</p>
                <p>National Suicide Prevention Lifeline: 1-800-273-TALK (8255)</p>
                <p>National Hopeline Network: 1-800-SUICIDE (800-784-2433)</p>
                <p>Crisis Text Line: Text "DESERVE" TO 741-741</p>
                <p>
                  Lifeline Crisis Chat (Online live messaging):
                  <a
                    target="_blank"
                    href=" https://suicidepreventionlifeline.org/chat/"
                  ></a>{" "}
                </p>
                <p>Self-Harm Hotline: 1-800-DONT CUT (1-800-366-8288)</p>
                <p>Planned Parenthood Hotline: 1-800-230-PLAN (7526){" "}</p>
                <p>National Council on Alcoholism & Drug Dependency Hope Line:
                  1-800-622-2255</p>
                <p>National Crisis Line - Anorexia and Bulimia: 1-800-233-4357</p>
                <p>TREVOR Crisis Hotline: 1-866-488-7386</p>
            </div>
            <div className="resource-links">
              <h2>Additional Educational and Patient Resources</h2>
                <p>
                  <a target="_blank"
                    href="https://www.samhsa.gov/find-help/national-helpline"
                  >Substance Abuse & Mental Health Services{" "}</a>
                </p>
                <p>
                  <a target="_blank" href="https://adaa.org/">
                    Anxiety And Depression Association of America
                  </a>
                </p>
                <p>
                  <a target="_blank"
                    href="https://www.apa.org/topics/depression/recover"
                  > Depression and Benefits of Therapy </a>
                </p>
                <p>
                  <a target="_blank" href="https://beyondocd.org/">
                    OCD Resources and Information
                  </a>
                </p>
                <p>
                  <a target="_blank" href="https://www.ptsd.va.gov/">
                    National Center for PTSD
                  </a>
                </p>
                <p>
                  <a target="_blank" href="https://www.opentohope.com/">
                    Struggling with loss of a loved one?
                  </a>
                </p>
                <p>
                  <a target="_blank" href="https://afsp.org/">
                    American Foundation for Suicide Prevention
                  </a>
                </p>
            </div>
          </div>
          </div>
        );
    }
}

export default Resources;