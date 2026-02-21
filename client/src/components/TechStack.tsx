import { useScrollReveal } from '../hooks/useScrollReveal'
import './TechStack.css'

const buildWith = [
  { name: 'React',       category: 'Frontend' },
  { name: 'Next.js',     category: 'Frontend' },
  { name: 'TypeScript',  category: 'Frontend' },
  { name: 'Node.js',     category: 'Backend'  },
  { name: 'Python',      category: 'Backend'  },
  { name: 'PostgreSQL',  category: 'Backend'  },
  { name: 'MongoDB',     category: 'Backend'  },
  { name: 'AWS',         category: 'Cloud'    },
  { name: 'Vercel',      category: 'Cloud'    },
  { name: 'Docker',      category: 'Cloud'    },
  { name: 'Railway',     category: 'Cloud'    },
]

const connectTo = [
  { name: 'Stripe',      category: 'Payments'  },
  { name: 'Shopify',     category: 'Commerce'  },
  { name: 'Zapier',      category: 'Automate'  },
  { name: 'n8n',         category: 'Automate'  },
  { name: 'Mailchimp',   category: 'Email'     },
  { name: 'HubSpot',     category: 'CRM'       },
  { name: 'Airtable',    category: 'Data'      },
  { name: 'Twilio',      category: 'SMS/Voice' },
]

const categoryColor: Record<string, string> = {
  Frontend:  'cyan',
  Backend:   'blue',
  Cloud:     'orange',
  Payments:  'green',
  Commerce:  'green',
  Automate:  'orange',
  Email:     'blue',
  CRM:       'blue',
  Data:      'cyan',
  'SMS/Voice': 'green',
}

export default function TechStack() {
  useScrollReveal()

  return (
    <section className="stack section" id="stack">
      <div className="container">
        <div className="stack__header reveal">
          <span className="section-label">Tech Stack</span>
          <h2 className="stack__title">
            What we build with —<br />
            <span className="gradient-text">and what we connect to</span>
          </h2>
          <p className="stack__subtitle">
            We work with the tools that get the job done right. Whatever your idea needs,
            we've likely already shipped something with it.
          </p>
        </div>

        <div className="stack__groups reveal reveal-delay-1">
          <div className="stack__group">
            <h3 className="stack__group-label">We build with</h3>
            <div className="stack__grid">
              {buildWith.map((p) => (
                <div key={p.name} className={`stack__item stack__item--${categoryColor[p.category]}`}>
                  <span className="stack__name">{p.name}</span>
                  <span className={`tag tag-${categoryColor[p.category]} stack__cat`}>{p.category}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="stack__divider" aria-hidden="true" />

          <div className="stack__group">
            <h3 className="stack__group-label">We connect to</h3>
            <div className="stack__grid">
              {connectTo.map((p) => (
                <div key={p.name} className={`stack__item stack__item--${categoryColor[p.category]}`}>
                  <span className="stack__name">{p.name}</span>
                  <span className={`tag tag-${categoryColor[p.category]} stack__cat`}>{p.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
