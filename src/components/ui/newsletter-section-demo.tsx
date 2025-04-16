import { NewsletterSection } from "@/components/ui/newsletter-section"

async function mockSubscribe(email: string) {
  // API request simulation
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  if (email.includes('error')) {
    return { success: false, error: 'Something went wrong!' }
  }
  
  return { success: true }
}

function NewsletterSectionDemo() {
  return (
    <div className="space-y-8">
      <NewsletterSection 
        title="Join our newsletter"
        onSubscribe={mockSubscribe}
      />
    </div>
  )
}

export { NewsletterSectionDemo }
