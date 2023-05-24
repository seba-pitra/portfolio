import { PresentacionIntroducing } from "./PresentationIntroducing";
import { PresentationDescription } from "./PresentationDescription";
import { PresentationName }        from "./PresentationName";
import { PresentationSocialMedia } from "./PresentationSocialMedia";
import { PresentationWhoAmI }      from "./PresentationWhoAmI";
import   React          from "react";
import { ReactElement } from "react";


interface Props {
  children?: ReactElement | ReactElement[];
}

const Presentation = ({ children }: Props) => {

  return (
    <section className="flex w-4/5 mt-24 mb-44 ml-auto mr-auto text-start ease-in-out duration-300 ">

      <div>
        { children }
      </div>

    </section>
  )
}

Presentation.Introducing = PresentacionIntroducing;
Presentation.Name        = PresentationName;
Presentation.WhoAmI      = PresentationWhoAmI;
Presentation.Description = PresentationDescription;
Presentation.SocialMedia = PresentationSocialMedia;


export default Presentation;