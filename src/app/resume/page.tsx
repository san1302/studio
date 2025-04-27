import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Download, Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume - Minimalist Muse',
  description: 'View or download the resume.',
};

// Mock Resume Data - Replace with your actual information
const resumeData = {
  name: 'Minimalist Muse',
  title: 'Full-Stack Developer & Designer',
  location: 'Cyberspace',
  contact: {
    email: 'hello@minimalistmuse.dev',
    phone: '+1 (555) 123-4567',
    linkedin: 'linkedin.com/in/minimalistmuse', // Just the path part
    github: 'github.com/minimalistmuse', // Just the path part
  },
  summary: 'A highly motivated and detail-oriented Full-Stack Developer and Designer with a passion for creating clean, efficient, and user-centered digital experiences. Proven ability to bridge the gap between design and development, delivering high-quality products from concept to deployment.',
  experience: [
    {
      title: 'Senior Developer & Designer',
      company: 'Creative Solutions Inc.',
      period: '2021 - Present',
      location: 'Remote',
      description: 'Led development of key client projects, designed intuitive user interfaces, and mentored junior team members. Specialized in React, Next.js, Node.js, and Figma.',
    },
    {
      title: 'Web Developer',
      company: 'Tech Innovators Co.',
      period: '2018 - 2021',
      location: 'San Francisco, CA',
      description: 'Developed and maintained responsive websites and web applications using JavaScript, HTML, CSS, and various frameworks. Collaborated with designers and product managers.',
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
      degree: 'Certificate in UI/UX Design',
      institution: 'Design Institute Online',
      period: '2019',
      location: 'Online',
    },
  ],
  skills: [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
    'HTML', 'CSS', 'Tailwind CSS', 'Sass',
    'UI/UX Design', 'Figma', 'Adobe Creative Suite',
    'Git', 'Docker', 'Firebase', 'PostgreSQL', 'MongoDB',
    'Agile Methodologies', 'Problem Solving', 'Communication',
  ],
};

export default function ResumePage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Resume</h1>
        <Button asChild variant="outline">
          {/* Update the href to the actual path of your downloadable resume */}
          <a href="/resume-minimalist-muse.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </Button>
      </div>

      <Card className="mb-8 shadow-sm">
        <CardHeader>
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <CardTitle className="text-2xl">{resumeData.name}</CardTitle>
              <p className="text-lg text-accent font-medium mt-1">{resumeData.title}</p>
               <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1"><MapPin size={14}/> {resumeData.location}</p>
            </div>
             <div className="text-sm text-muted-foreground mt-4 md:mt-0 space-y-1 text-left md:text-right">
               <a href={`mailto:${resumeData.contact.email}`} className="flex items-center justify-start md:justify-end gap-2 hover:text-accent transition-colors">
                 <Mail size={14} /> {resumeData.contact.email}
               </a>
               {/* <p className="flex items-center justify-start md:justify-end gap-2"><Phone size={14}/> {resumeData.contact.phone}</p> */}
               <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-start md:justify-end gap-2 hover:text-accent transition-colors">
                 <Linkedin size={14} /> {resumeData.contact.linkedin}
               </a>
                <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-start md:justify-end gap-2 hover:text-accent transition-colors">
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
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {resumeData.experience.map((job, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="text-sm text-accent">{job.company} | {job.location}</p>
                  <p className="text-xs text-muted-foreground mb-2">{job.period}</p>
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                   {index < resumeData.experience.length - 1 && <Separator className="mt-6" />}
                </div>
              ))}
            </CardContent>
          </Card>

           <Card className="shadow-sm">
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
          <Card className="shadow-sm sticky top-20">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                   <span key={index} className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
