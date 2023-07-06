import React from 'react';
import "./diseases.scss"
import Title from '../../common/title/Title';
import { diseases } from '../../../data/Data';
const Diseases = () => {
    return (
        <>
            <section id="diseases" className="section-p1">
                <Title title="بیماری های گیاهی"
                 subtitle="بیماری های قارچی، ویروسی، باکتریایی ، انگلی "/>
                 <div className='grid'>
                    {diseases.map((val)=>(
                        <div className="box" key={val.id}>
                            <div className='img'>
                                <img src={val.cover} alt="" />
                            </div>
                            <div className='details'>
                                    <h3>{val.title}</h3>
                                    <p>{val.description}</p>
                                    <button> مشاهده کامل</button>
                                </div>
                        </div>
                    ))}
                 </div>
            </section>
        </>
    );
};

export default Diseases;