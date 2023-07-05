import React from 'react';
import Title from '../../common/title/Title';
import { feature } from '../../../data/Data';
import "./feature.scss"
import CountUp from 'react-countup';

const Feature = () => {
    return (
        <>
            <section id="feature" className='section-p1'>
               <div className='grid'>
                {feature.map((val)=>(
                    <div key={val.id} className="box">
                         <i className={val.icon}></i>
                         <div className='details'>
                         <CountUp start={0} end={val.Number} delay={0} duration={6}>
                         {({ countUpRef }) => (
                             <div>
                             <span ref={countUpRef} />
                             <p>{val.title}</p>
                             </div>
                         )}
                              </CountUp>
                         </div>
                    </div>
                ))}
               </div>
            </section>
        </>
    );
};

export default Feature;