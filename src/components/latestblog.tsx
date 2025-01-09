import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt } from "react-icons/fa";
import { CiPen } from "react-icons/ci";

interface Post {
  id: number;
  title: string;
  date: string;
  imgSrc: string;
  name: string;
  content: string;
}

const FeaturedPost: Post[] = [
  { id: 1, title: "Mauris at orci non vulputate diam tincidunt nec.", date: "$56.00", imgSrc: "/blog1.png",name: "Saboor ALiY", content: "More off this less hello samlande lied much over tightly circa horse taped mightly." },
  { id: 2, title: "Aenean vitae in aliquam ultrices lectus. Etiam.s", date: "$56.00", imgSrc: "/2blog.png", name: "Saboor ALiY", content: "More off this less hello samlande lied mucho ver tightly circa horse taped mightly." },
  { id: 3, title: "Sit nam congue feugiat nisl, mauris amet nisi. ", date: "$56.00", imgSrc: "/3blog.png", name: "Saboor ALiY", content: "More off this less hello samlande lied much over tightly circa horse taped mightly." },
];

const LatestBlog: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex text-center w-full mb-20">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
        
        </div>
        <div className="flex flex-col">
          {FeaturedPost.map((post) => (
            <div key={post.id} className="p-4 w-full mb-6">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden pl-4 pt-4 pr-4 pb-4">
                <Image className="w-full object-cover object-center" src={post.imgSrc} alt={post.title} width={300} height={300} />
                <div className="p-6 flex space-x-32">
                              <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <CiPen className='w-4 h-4 mr-1 text-pink-600' /> {post.name}
                    </span>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaCalendarAlt className='w-4 h-4 mr-1 text-pink-600' /> {post.date}
                    </span>
                  </div>  
                  <h1 className="title-font text-lg font-medium text-indigo-400 mb-3">{post.title}</h1>
                  <p className="leading-relaxed mb-3 mt-1">{post.content}</p>
                 <div className="flex items-center flex-wrap">
                    <Link href="Blog/SingleBlog" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Read Online
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"> </path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                   

                  </div>
                </div>
              </div>
            
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
