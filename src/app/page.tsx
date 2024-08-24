
export default async function Home() {

  return (
    <main>
      <section className="home section  " id="home">
        <div className="container flex gap-5 justify-center">
          <div className="intro">
            <img
              src="/imgs/Profile.png"
              alt="Al Siam Profile"
              className="shadow-dark"   
            />
            <div>
            <h1 className=" text-[2.5rem]  text-black ">Dr. Narayan Jadhav</h1>
            </div>
            <p className="text-[1.5rem]">Professor</p>
            <div className="social-links">
              <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://facebook.com/" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://instagram.com/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://linkedin.com/in/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
