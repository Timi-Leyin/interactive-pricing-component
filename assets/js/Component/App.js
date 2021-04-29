   
function App(){
    return(
        <section className='React-app-container'>
               <div className="head">
      <h1>Simple, traffic-based pricing</h1>
      <p>sign up for our 30-days trial, No credit card required.</p>
      <img src='/assets/images/pattern-circles.svg' alt="Circles Pattern"/>
    </div>

    
    <Suspense fallback={'Loading'}>
    <PricingCard />
    </Suspense>
        </section>
    )
}
