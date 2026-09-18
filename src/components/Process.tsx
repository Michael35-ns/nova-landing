import { useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'PLANEAR | Definimos el camino',
    titleEn: 'PLAN | We define the path',
    body: "Escuchamos y entendemos las necesidades de nuestros clientes y de cada proceso. Definimos objetivos, alcance, recursos, tiempos, costos, riesgos y criterios técnicos para establecer una planificación clara y orientar nuestras acciones hacia los resultados esperados.",
    bodyEn: "We listen to and understand our clients' needs and every process. We define objectives, scope, resources, timelines, costs, risks and technical criteria to set a clear plan and guide our actions toward the expected results.",
    tags: 'Planificación · Objetivos · Alcance · Recursos · Riesgos',
    tagsEn: 'Planning · Objectives · Scope · Resources · Risks',
  },
  {
    num: '02',
    title: 'HACER | Ejecutamos con disciplina',
    titleEn: 'DO | We execute with discipline',
    body: 'Convertimos la planificación en acción, coordinando personas, recursos y actividades para ejecutar nuestros proyectos y procesos de manera eficiente, segura y conforme con los requisitos y estándares definidos.',
    bodyEn: 'We turn planning into action, coordinating people, resources and activities to execute our projects and processes efficiently, safely and in line with the requirements and standards we set.',
    tags: 'Ejecución · Coordinación · Recursos · Seguridad · Calidad',
    tagsEn: 'Execution · Coordination · Resources · Safety · Quality',
  },
  {
    num: '03',
    title: 'VERIFICAR | Medimos y controlamos',
    titleEn: 'CHECK | We measure and control',
    body: 'Realizamos seguimiento a nuestros proyectos y procesos mediante indicadores, controles, reportes y reuniones de seguimiento, evaluando el cumplimiento de objetivos, tiempos, costos, calidad y requisitos para identificar oportunamente desviaciones y oportunidades de mejora.',
    bodyEn: 'We track our projects and processes through indicators, controls, reports and follow-up meetings, assessing compliance with objectives, timelines, costs, quality and requirements to promptly identify deviations and opportunities for improvement.',
    tags: 'Seguimiento · Indicadores · Control · Calidad · Cumplimiento',
    tagsEn: 'Follow-up · Indicators · Control · Quality · Compliance',
  },
  {
    num: '04',
    title: 'ACTUAR | Mejoramos continuamente',
    titleEn: 'ACT | We continuously improve',
    body: 'Analizamos los resultados, implementamos acciones de mejora y aplicamos los aprendizajes obtenidos para optimizar nuestros procesos, fortalecer la gestión y mejorar continuamente nuestros resultados.',
    bodyEn: "We analyze results, implement improvement actions and apply what we've learned to optimize our processes, strengthen management and continuously improve our results.",
    tags: 'Mejora continua · Optimización · Aprendizaje · Resultados',
    tagsEn: 'Continuous improvement · Optimization · Learning · Results',
  },
];

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <section className="section navy" id="process">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow is-light" data-en="How we work">Cómo trabajamos</div>
          <h2 data-en="At NOVOSTI we work under the PDCA cycle">En NOVOSTI trabajamos bajo el ciclo PHVA</h2>
          <p className="section-kicker lead" data-en="Plan, Do, Check, Act: the methodology that guides the management of our engineering, construction and telecom projects, as well as our internal processes, letting us plan, execute, control and continuously improve.">Planear, Hacer, Verificar y Actuar: la metodología que guía la gestión de nuestros proyectos de ingeniería, construcción y telecomunicaciones, y también nuestros procesos internos, para planificar, ejecutar, controlar y mejorar de forma continua.</p>
        </div>
        <div className="proc-grid reveal d1">
          <div className="proc-line" aria-hidden="true">
            <span
              className="proc-line-fill"
              style={{ width: `${(active / (steps.length - 1)) * 100}%` }}
            />
          </div>
          {steps.map((step, i) => (
            <button
              type="button"
              key={step.num}
              className={`proc-step${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
            >
              <div className="dot"></div>
              <div className="pnum">{step.num}</div>
              <h3 data-en={step.titleEn}>{step.title}</h3>
              <p data-en={step.bodyEn}>{step.body}</p>
              <div className="proc-tags" data-en={step.tagsEn}>{step.tags}</div>
            </button>
          ))}
        </div>
        <div className="proc-footnote reveal d2">
          <h4 data-en="A methodology woven into our culture">Una metodología que hace parte de nuestra cultura</h4>
          <p data-en="At NOVOSTI, the PHVA cycle doesn't end when a project is delivered. It's a permanent way of working that lets us learn, improve and generate more value for our clients.">En NOVOSTI, el ciclo PHVA no termina con la entrega de un proyecto. Es una forma permanente de trabajar que nos permite aprender, mejorar y generar mayor valor para nuestros clientes.</p>
        </div>
      </div>
    </section>
  );
}
