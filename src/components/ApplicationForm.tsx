import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  education: string;
  portfolio: string;
  experience: string;
  coverLetter: string;
  resume: File | null;
  agreeTerms: boolean;
};

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    education: '',
    portfolio: '',
    experience: '',
    coverLetter: '',
    resume: null,
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      });
      // Clear error when field is edited
      if (errors.resume) {
        setErrors({
          ...errors,
          resume: undefined,
        });
      }
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
    // Clear error when field is edited
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    if (!formData.position) newErrors.position = 'Position is required';
    if (!formData.education.trim()) newErrors.education = 'Education is required';
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
    if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover letter is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form after submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
          education: '',
          portfolio: '',
          experience: '',
          coverLetter: '',
          resume: null,
          agreeTerms: false,
        });
      }, 1500);
    }
  };

  if (isSubmitted) {
    return (
      <section id="apply" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
              <p className="text-lg text-gray-700 mb-6">
                Thank you for applying to Hot Beans Web. We've received your application and will review it shortly.
              </p>
              <p className="text-gray-700 mb-8">
                Our team will contact you within 5-7 business days regarding the next steps in the application process.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply Now</h2>
          <p className="text-lg text-gray-700">
            Ready to join our team? Fill out the application form below to get started on your journey with Hot Beans Web.
          </p>
        </div>

        <form 
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="position" className="block text-gray-700 font-medium mb-2">
              Position You're Applying For <span className="text-red-500">*</span>
            </label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.position ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select a position</option>
              <option value="Junior Frontend Developer">Junior Frontend Developer</option>
              <option value="Junior Backend Developer">Junior Backend Developer</option>
              <option value="Junior Full Stack Developer">Junior Full Stack Developer</option>
              <option value="Other">Other</option>
            </select>
            {errors.position && (
              <p className="text-red-500 text-sm mt-1">{errors.position}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="education" className="block text-gray-700 font-medium mb-2">
              Education Background <span className="text-red-500">*</span>
            </label>
            <textarea
              id="education"
              name="education"
              rows={3}
              value={formData.education}
              onChange={handleChange}
              placeholder="List your educational qualifications, including any relevant courses or certifications"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.education ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.education && (
              <p className="text-red-500 text-sm mt-1">{errors.education}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="portfolio" className="block text-gray-700 font-medium mb-2">
              Portfolio URL
            </label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              placeholder="https://your-portfolio-website.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">
              Relevant Experience <span className="text-red-500">*</span>
            </label>
            <textarea
              id="experience"
              name="experience"
              rows={4}
              value={formData.experience}
              onChange={handleChange}
              placeholder="Describe your experience with web development, including any projects you've worked on"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.experience ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.experience && (
              <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="coverLetter" className="block text-gray-700 font-medium mb-2">
              Cover Letter <span className="text-red-500">*</span>
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows={6}
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell us why you want to work at Hot Beans Web and what makes you a good fit for the role"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.coverLetter ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.coverLetter && (
              <p className="text-red-500 text-sm mt-1">{errors.coverLetter}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="resume" className="block text-gray-700 font-medium mb-2">
              Resume/CV <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.resume ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <p className="text-sm text-gray-500 mt-1">
              Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
            </p>
            {errors.resume && (
              <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
            )}
          </div>

          <div className="mb-8">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleCheckboxChange}
                className="mt-1 mr-2"
              />
              <label htmlFor="agreeTerms" className="text-gray-700">
                I agree to the <a href="#" className="text-blue-500 hover:underline">privacy policy</a> and consent to Hot Beans Web processing my application data <span className="text-red-500">*</span>
              </label>
            </div>
            {errors.agreeTerms && (
              <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplicationForm;