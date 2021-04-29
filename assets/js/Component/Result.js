
function Result({result}){
let wrapper=useRef(null)
let fadesEl=useRef([])

useEffect(()=>{
    gsap.to(wrapper,0,{
        visibility:'visible',
        ease:Power2.easeInOut
    })

    gsap.fromTo([...fadesEl.current],0.4,{
        opacity:0,  
        ease:Power2.easeOut
    },{
        stagger:0.2,
        delay:0.2,
        ease:Power2.easeIn,
        opacity:1
    })
},[])

    return(
        <div ref={el=> wrapper=el} className='Wrapper'>

        <div className="marked" ref={el=>fadesEl.current.push(el)}>${result.price}</div>
        <p>{result.type}</p>
            <h3 ref={el=>fadesEl.current.push(el)}>You have Successfully Registered</h3>
            <button type='button' className='ButtonStyle' ref={el=>fadesEl.current.push(el)}>Continue</button>
    
            </div>
    )
}


