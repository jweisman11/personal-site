import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8 items-center">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/about" className="text-gray-900 font-semibold">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to my personal page. Here you will find information about my professional journey, educational background, and interests.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Work History</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-medium text-gray-700">Position Title</h3>
              <p className="text-gray-500">Company Name | Date Range</p>
              <p className="text-gray-600 mt-2">
                Description of your role and key achievements.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-medium text-gray-700">Degree</h3>
              <p className="text-gray-500">Institution Name | Graduation Year</p>
              <p className="text-gray-600 mt-2">
                Relevant coursework, achievements, or focus areas.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Skill 1</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Skill 2</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Skill 3</span>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Facts</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Interesting fact about yourself</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Hobbies or interests</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>What drives or motivates you</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
          <p className="text-gray-600">
            Feel free to reach out for collaborations or opportunities.
          </p>
        </section>
        </div>
      </div>
    </div>
  );
}