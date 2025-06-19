import ProfileCard from "./profile-card";

const variables = {
  name: "Sarah Dole",
  title: "Front End Engineer @ Microsoft",
  bio: "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
  thumbnailSrc: "/profile-card/profile.png",
};

export default function Home() {
  const { name, title, bio, thumbnailSrc } = variables;

  return (
    <div className="page flex flex-col items-center bg-gradient-to-b from-gray-50 to-[#d2d6db] py-[200px] h-full min-h-screen">
      <ProfileCard
        name={name}
        title={title}
        bio={bio}
        thumbnailSrc={thumbnailSrc}
      />

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
