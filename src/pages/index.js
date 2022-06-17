import * as React from "react"
import Logo from '../assets/logo_wordmark.svg'
import '../styles/styles.module.css'

const IndexPage = () => {
  return (
    <main style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <title>Panacea Micros</title>
      <article>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Logo />
        </div>
        <section>
          <h1>Looking to order?</h1>
          <p>
            To place an order, please use <a href={'https://tally.so/r/wobyye'}>this form</a> and we'll start growing for you as soon as possible.
          </p>
        </section>
        <section>
          <h1>Have a question?</h1>
          <p>
            We're happy to answer any and all questions you have through <a href='https://www.instagram.com/panaceamicros/'>instagram</a> or <a href="mailto:contact@panaceamicros.com">email</a>.
          </p>
        </section>
        <section>
          <h1>Want to learn more?</h1>
          <p>
            Follow <a href='https://www.instagram.com/panaceamicros/'>@panaceamicros</a> {'for recipes, nutrition facts, special events & more!'}
          </p>
        </section>
      </article>
    </main>
  )
}

export default IndexPage;
