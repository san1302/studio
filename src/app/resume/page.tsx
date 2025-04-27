import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Download, Mail, Phone, Linkedin, Github, MapPin, Code } from 'lucide-react'; // Added Code icon
import { Badge } from '@/components/ui/badge'; // Import Badge component

export const metadata: Metadata = {
  title: 'Resume - Minimalist Muse',
  description: 'View or download the resume of Minimalist Muse, Full-Stack Developer.',
};

// Mock Resume Data - Replace with your actual information
const resumeData = {
  name: 'Minimalist Muse',
  title: 'Full-Stack Developer', // Updated title
  location: 'Cyberspace | Remote', // Updated location
  contact: {
    email: 'hello@minimalistmuse.dev',
    phone: '+1 (555) 123-4567', // Keep or remove as needed
    linkedin: 'linkedin.com/in/minimalistmuse', // Just the path part
    github: 'github.com/minimalistmuse', // Just the path part
  },
  summary: 'A highly motivated and detail-oriented Full-Stack Developer with a passion for creating clean, efficient, and scalable web applications. Proven ability to design, develop, and deploy high-quality software solutions using modern technologies across the entire stack. Eager to contribute technical expertise to challenging projects.', // Updated summary
  experience: [
    {
      title: 'Senior Full-Stack Developer', // Updated title
      company: 'Innovatech Solutions Ltd.', // Example company
      period: '2021 - Present',
      location: 'Remote',
      description: 'Led the development of core platform features using Next.js, TypeScript, and Node.js. Designed and implemented RESTful APIs, managed PostgreSQL databases, and mentored junior developers. Contributed to architectural decisions and improved deployment pipelines.', // Updated description
    },
    {
      title: 'Software Engineer', // Updated title
      company: 'CodeCrafters Inc.', // Example company
      period: '2018 - 2021',
      location: 'Austin, TX', // Example location
      description: 'Developed and maintained client-side applications using React and Redux. Built backend services with Express.js and MongoDB. Collaborated closely with product managers and designers in an Agile environment to deliver features iteratively.', // Updated description
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      period: '2014 - 2018',
      location: 'Metropolis, USA',
    },
     {
      degree: 'Certified Cloud Practitioner', // Example certification
      institution: 'Amazon Web Services (AWS)',
      period: '2020',
      location: 'Online',
    },
  ],
  skills: [
    // Programming Languages
    'JavaScript (ES6+)', 'TypeScript', 'Python', 'Node.js', 'HTML5', 'CSS3',
    // Frontend Frameworks/Libraries
    'React', 'Next.js', 'Redux', 'Tailwind CSS', 'Styled Components',
    // Backend Frameworks/Libraries
    'Express.js', 'NestJS',
    // Databases
    'PostgreSQL', 'MongoDB', 'Redis', 'Firebase Firestore',
    // Cloud & DevOps
    'AWS (EC2, S3, Lambda, API Gateway, DynamoDB)', 'Docker', 'Kubernetes (Basic)', 'Vercel', 'Netlify', 'CI/CD', 'Git',
    // Tools & Concepts
     'RESTful APIs', 'GraphQL', 'Microservices', 'Serverless Architecture', 'Agile/Scrum', 'Unit Testing (Jest)', 'Integration Testing',
     // Design (Basic)
     'Figma (Basic)', 'UI/UX Principles',
  ],
};

export default function ResumePage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0 flex items-center gap-2">
           <Code size={28} className="text-primary"/> {/* Added Code icon */}
           Resume
        </h1>
        <Button asChild variant="outline">
          {/* Update the href to the actual path of your downloadable resume */}
          <a href="/resume-minimalist-muse-dev.pdf" download> {/* Updated file name */}
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </div>

      <Card className="mb-8 shadow-sm border border-border"> {/* Added border */}
        <CardHeader>
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <CardTitle className="text-2xl">{resumeData.name}</CardTitle>
              <p className="text-lg text-primary font-medium mt-1">{resumeData.title}</p> {/* Changed text-accent to text-primary */}
               <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1"><MapPin size={14}/> {resumeData.location}</p>
            </div>
             <div className="text-sm text-muted-foreground mt-4 md:mt-0 space-y-1 text-left md:text-right">
               <a href={`mailto:${resumeData.contact.email}`} className="flex items-center justify-start md:justify-end gap-2 hover:text-primary transition-colors"> {/* Changed hover:text-accent to hover:text-primary */}
                 <Mail size={14} /> {resumeData.contact.email}
               </a>
               {/* Phone number commented out by default */}
               {/* <p className="flex items-center justify-start md:justify-end gap-2"><Phone size={14}/> {resumeData.contact.phone}</p> */}
               <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-start md:justify-end gap-2 hover:text-primary transition-colors"> {/* Changed hover:text-accent to hover:text-primary */}
                 <Linkedin size={14} /> {resumeData.contact.linkedin}
               </a>
                <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-start md:justify-end gap-2 hover:text-primary transition-colors"> {/* Changed hover:text-accent to hover:text-primary */}
                 <Github size={14} /> {resumeData.contact.github}
               </a>
             </div>
           </div>
        </CardHeader>
         <CardContent>
          <Separator className="mb-4"/>
          <p className="text-muted-foreground">{resumeData.summary}</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="shadow-sm border border-border"> {/* Added border */}
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {resumeData.experience.map((job, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="text-sm text-primary font-medium">{job.company} | {job.location}</p> {/* Changed text-accent to text-primary and added font-medium */}
                  <p className="text-xs text-muted-foreground mb-2">{job.period}</p>
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                   {index < resumeData.experience.length - 1 && <Separator className="mt-6" />}
                </div>
              ))}
            </CardContent>
          </Card>

           <Card className="shadow-sm border border-border"> {/* Added border */}
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.institution} | {edu.location}</p>
                  <p className="text-xs text-muted-foreground">{edu.period}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="shadow-sm sticky top-20 border border-border"> {/* Added border */}
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                   // Use Badge for skills for better consistency
                   <Badge key={index} variant="secondary" className="font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
