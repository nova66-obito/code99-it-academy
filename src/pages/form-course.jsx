import {useState} from "react";
import { useForm } from "react-hook-form";
export default function Fromcourse(){
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();
      // this for the reset
     const [isSubmit, setIsSubmit] = useState(false)
     function onSubmit(val) {
        console.log(val,"course");
        setIsSubmit(!isSubmit);
        reset();
      }
      console.log(errors)
    return(
        <>
          {/* this for submitment */}
          {isSubmit ? <div className="submit center">
                           <h4>Thanks for submitting</h4>
                        </div>
                        :  <form action="#" onSubmit={handleSubmit(onSubmit)}>
                        <div className="min-head">
                        <h4>star your <span>corporate caree</span></h4>
                        </div>
                         {/* for the name */}
                         <div>
                            <input type="text" placeholder="enter your name"
                            {...register('name',
                               {required:"name is required"}
                            )}
                            />
                            {errors.name && <small>{errors.name.message}!</small>}
                         </div>
                         {/* for the email */}
                         <div>
                            <input type="email" placeholder="enter your email" 
                            {...register('email',
                              {required:"email id is required"} 
                            )}
                            />
                            {errors.email && <small>{errors.email.message}!</small>}
                         </div>
                         {/* for the phone number */}
                          <div>
                            <input type="number" placeholder="enter your number" 
                             {...register('number',
                               {required:"phone no is required"} 
                             )}
                            />
                            {errors.number && <small>{errors.number.message}!</small>}
                         </div> 
                         {/* for the course */}
                         <div>
                            <input type="text" placeholder="which course are you looking for"
                               {...register('course',
                                  {required:"enter the course"} 
                                )}
                            />
                            {errors.course && <small>{errors.course.message}!</small>}
                         </div>
                         {/* for the qualifaction */}
                         <div>
                            <input type="text" placeholder="enter your qualifiaction"
                              {...register('qf',
                               {required:" qualifaction required"} 
                             )}
                            />
                            {errors.qf && <small>{errors.qf.message}!</small>}
                         </div>
                         {/* robot check */}
                         <div className="c-robot">
                            <input {...register('check', 
                            {required:true})}
                             type="checkbox"/>
                            <sup>i'm not robort</sup>
                         </div>  
                         <button type="submit">enquire now</button>
                     </form>
                  } 
        </>
    )
}