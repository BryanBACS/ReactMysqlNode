import React from "react"
import {Form , Formik} from 'formik' //Form permite crear el formulario y Formik para ver el estado

export default function TaskForm(){
    return(
        <div>
            <Formik //*Manejar estados de variables para guardar */}
                initialValues={{
                    title:"", ///*De esta forma se definen variables donde guardan lo que se agrega en el form */}
                    description:"", ////*De forma que luego pueden ser enviadas al backend */}
                }} 
                //comprobar que este funcionando, se imprime los valores de los estados capturados hasta el momento lo escrito
                onSubmit={(values)=>{ //se realiza una función que lo que haga es capturar los valores que se han agregado hasta el momento
                    console.log(values)
                    //de esta forma se capturan los valores y los deja como tipo json perfecto para la base de datos
                }} //metodo para enviar el formulario
                >
                
                {({handleChange , handleSubmit}) =>( //Se crea una función para la ejecución del form. Por ende primero es Formik, luego la función y dentro el formulario
                    //Se crea esta función con el fin de poder hacer uso del handlechange y asi se guarde en las variables de Formik, mientras se valla llenando de forma automatica se vaya agregando, eso es la ventaja
                    //Además ahora para que haga uso de la ejecución de Formik se hace el llamado
                    <Form onSubmit={handleSubmit}> {/**De esta forma al enviar el submit en el button se hace el llamado del submit de formik para mostrar los valores */}
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Write a title" onChange={handleChange}/> {/*Importante hacer uso de name para que reconozca formik y poder guardarlo en la variable especifica*/}

                        <label>Description</label>
                        <textarea name="description" rows="3" placeholder="Write a description" onChange={handleChange}></textarea>

                        <button type="submit">Guardar</button>
                    </Form>
                )} 

                
            </Formik>
        </div>
    )
}