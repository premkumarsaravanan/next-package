import "aos/dist/aos.css";
interface IntroProps {
    data?: {
        content?: React.ReactNode;
        link?: string;
        logo?: {
            url: string;
        };
    };
    customClass?: string;
}
declare const Intro: React.FC<IntroProps>;
export default Intro;
