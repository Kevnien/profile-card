import ProfileCard from "./profile-card";

export default function Home() {
  return (
    <div className="page flex flex-col items-center bg-gradient-to-b from-gray-50 to-[#d2d6db] py-[200px] h-full min-h-screen">
      <ProfileCard />

      <footer>
        <div className="credits" data-gfe-screenshot-exclude="true">
          A challenge by
          <a
            href="https://www.greatfrontend.com/projects?ref=challenges"
            target="_blank"
          >
            GreatFrontEnd Projects
          </a>
          . Built by
          <a
            href="https://www.greatfrontend.com/projects/u/kevinn858"
            target="_blank"
          >
            Kevin Nguyen
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
