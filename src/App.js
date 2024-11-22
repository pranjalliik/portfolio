import './App.css';
import NavBar from './components/NavBar';
import myprofile from './images/myprofile.png'
import project2 from './images/project2.png'
import project1 from './images/project1.png'
function App() {
  console.log(typeof window.innerWidth)
  return (
    <>
   <NavBar/>


<div className='flex xl:flex-row lg:flex-row md:flex-row flex-col lg:mt-24 xl:mt-24 md:mt-24 mt-20 justify-between items-center xl:items-start lg:items-start md:items-start gap-y-8'>
  <div className='flex flex-col  xl:ml-8 lg:ml-8 md:ml-8 ml-2 mt-2 md:mt-20 lg:mt-20 xl:mt-20 '>
    <div className='lg:text-6xl xl:text-6xl md:text-6xl text-4xl  font-bold text-[#333333]'>Hey there!
    I'm <span className='text-[#34D1C4]'>Pranjali</span> </div>
    <div className='text-gray-600 text-xl mt-5'>A Developer turning ideas into seamless, interactive experiences.</div>
    <div className='mt-3 bg-[#34D1C4] text-white rounded-lg w-[150px] text-center py-2 px-8 hover:bg-[#adaea7] cursor-default'><a href="#contact">Contact</a></div>
  </div>
<img 
    className="h-[230px] w-[230px] xl:h-[400px] xl:w-[400px]  lg:h-[350px] lg:w-[350px] md:h-[300px] md:w-[300px] xl:mr-24 mr-0 lg:mr-12 md:mr-6" 
    src={myprofile} 
    alt="Profile" 
  />
</div>


<section className="mt-8" id="work" >
<h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Work</h2>
  <div className="flex flex-wrap justify-center  gap-x-8 mb-6 gap-y-8">
  <div className="w-[425px] "   style={{
    width: '425px',
    ...(window.innerWidth < 438 && { width: '90%' }),
  }}>

  <div className="text-center text-[#34D1C4] text-2xl font-semibold mb-3">
    StudifyAI
  </div>
  
  <div className="text-center text-gray-500 text-sm mb-3">
    A cutting-edge AI-powered tool designed to help students streamline their study process by generating smart notes and study material tailored to any topic of choice.
  </div>
  
  <div className="text-center text-gray-500 text-xs mb-3">
    <span className="font-semibold">Technologies:</span> Next.js, Sql, Inngest
  </div>
  
  <div className="p-2 bg-black rounded-lg w-full">
    <img
      className="h-[200px] w-full"
      src={project1}
      alt="project1"
    />
    
    <div className="flex justify-center mt-2">
      <a 
        href="https://studify-ai.vercel.app" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-center text-white bg-[#34D1C4] rounded-lg py-1 px-12 cursor-pointer"
      >
        Link
      </a>
    </div>
    
    <div className="flex justify-center mt-2">
      <a 
        href="https://youtu.be/ZzqYNQ6jKuU " 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-center text-white bg-[#34D1C4] rounded-lg py-1 px-10 cursor-pointer"
      >
        Demo
      </a>
    </div>
  </div>
</div>


   <div className="w-[425px]"   style={{
    width: '425px',
    ...(window.innerWidth < 438 && { width: '90%' }),
  }}>

<div className="text-center text-[#34D1C4] text-2xl font-semibold mb-3">
  Chatly
</div>

<div className="text-center text-gray-500 text-sm mb-3">
Real-Time Chat Application: Built for seamless communication, this chat app utilizes WebSocket scalability with Redis to ensure efficient performance.</div>

<div className="text-center text-gray-500 text-xs mb-3">
  <span className="font-semibold">Technologies:</span> Next.js, Redis, Nodejs, WebSockets, Docker, MongoDB
</div>

<div className="p-2 bg-black rounded-lg w-full">
  <img
    className="h-[200px] w-full"
    src={project2}
    alt="project2"
  />
  
  <div className="flex justify-center mt-2">
    <a 
      href="https://chatapp-frontend-peach.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-center text-white bg-[#34D1C4] rounded-lg py-1 px-12 cursor-pointer"
    >
      Link
    </a>
  </div>
  
  <div className="flex justify-center mt-2">
    <a 
      href="https://youtu.be/hMGLIDo1RVg " 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-center text-white bg-[#34D1C4] rounded-lg py-1 px-10 cursor-pointer"
    >
      Demo
    </a>
  </div>
</div>
</div>
  </div>
</section>
    

<section className="bg-gray-50 py-12" id="about">
  <div className="container mx-auto px-6 md:px-12">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">About Me</h2>
    <div className="text-center text-lg text-gray-700 max-w-2xl mx-auto">
      <p className="mb-4">
        I am a <span className="text-[#34D1C4] font-medium">Full-stack Developer</span> with expertise in both frontend and backend technologies. 
      </p>
      <p className="mb-4">
        <span className='font-semibold'> Experience: </span> <span className="font-medium"><apan className='text-[#34D1C4]'> Internship at EasyEd</apan></span>,as a frontend developer where I contributed to the development of responsive, user-centric interfaces.
      </p>
      <p>
      On the backend, I have built various projects using <span className="font-medium">Node.js, Express, Sql, Redis, Mongodb, Docker  </span> gaining practical experience in building end-to-end web solutions.
      </p>
    </div>
  </div>
</section>


<section className="py-12 bg-gray-50" id="skills">
  <div className="container mx-auto px-6 md:px-12">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      <div className="skill-card bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-medium text-[#34D1C4]">Next.js</h3>
      </div>
      <div className="skill-card bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-medium text-[#34D1C4]">Node.js</h3>
      </div>
      <div className="skill-card bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-medium text-[#34D1C4]">React.js</h3>
      </div>
      <div className="skill-card bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-medium text-[#34D1C4]">SQL</h3>
      </div>
      <div className="skill-card bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-medium text-[#34D1C4]">AWS</h3>
      </div>
      <div className="skill-card bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-medium text-[#34D1C4]">Docker</h3>
      </div>
      <div className="skill-card bg-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-medium text-[#34D1C4]">Redis</h3>
      </div>
    </div>
  </div>
</section>

<section id="contact" className="py-12 bg-gray-50">
  <div className="container mx-auto px-6 md:px-12">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact</h2>
    <p className="text-center mb-6">Feel free to reach out to me for any questions, collaborations, or opportunities!</p>
    <div className="flex justify-center gap-6">
    <a href="mailto:kaushikpranjali7@gmail.com" className="text-[#34D1C4] text-lg">Email</a>
    <a href="https://www.linkedin.com/in/pranjali-kaushik-506554281" className="text-[#34D1C4] text-lg">LinkedIn</a>
      <a href="https://github.com/pranjalliik" className="text-[#34D1C4] text-lg">GitHub</a>
    </div>
  </div>
</section>

   
   </>

  );
}

export default App;
