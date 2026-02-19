import { useScrollReveal } from '../hooks/useScrollReveal'
import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We immerse ourselves in your business — stakeholder interviews, technical audits, and competitive analysis to understand the full landscape.',
    color: 'orange',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We synthesize findings into a clear technology roadmap with prioritized initiatives, success metrics, and a phased delivery plan.',
    color: 'blue',
  },
  {
    number: '03',
    title: 'Execution',
    description:
      'Our expert teams build, iterate, and deploy with rigorous quality standards — integrating seamlessly with your existing processes.',
    color: 'purple',
  },
  {
    number: '04',
    title: 'Enablement',
    description:
      'We train your teams, document everything, and provide ongoing support to ensure sustained performance and continuous improvement.',
    color: 'orange',
  },
]

export default function Process() {
  useScrollReveal()

  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process__header reveal">
          <span className="section-badge">How We Work</span>
          <h2 className="section-title">
            A Proven Path to{' '}
            <span className="gradient-text">Transformation</span>
          </h2>
          <p className="section-subtitle">
            Our structured methodology eliminates guesswork and maximizes value
            at every stage of your project.
          </p>
        </div>

        <div className="process__steps">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`process__step reveal reveal-delay-${index + 1}`}
            >
              <div className={`process__step-number process__step-number--${step.color}`}>
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="process__connector" aria-hidden="true" />
              )}
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
