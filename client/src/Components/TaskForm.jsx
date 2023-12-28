import React from "react"
import {Form , Formik} from 'formik' //Form permite crear el formulario y Formik para ver el estado
import {createTaskRequest} from '../api/task.api'

export default function TaskForm(){
    return(
        <div>
            <Formik //*Manejar estados de variables para guardar */}
                initialValues={{
                    title:"", ///*De esta forma se definen variables donde guardan lo que se agrega en el form */}
                    description:"", ////*De forma que luego pueden ser enviadas al backend */}
                }} 
                //comprobar que este funcionando, se imprime los valores de los estados capturados hasta el momento lo escrito
                onSubmit={async (values, actions)=>{ //se realiza una función que lo que haga es capturar los valores que se han agregado hasta el momento
                    //al ser llamado al backend se agrega el async con el await
                    console.log(values)
                    //de esta forma se capturan los valores y los deja como tipo json perfecto para la base de datos
                    
                    //entonces al recibir los valores aqui ya enviado del formulario abajo y guardados en las varaibles,
                    //hago envio al backend esos valores mediante el await de la función de conexión api con axios
                    try{ //al ser asincrono se maneja los errores mediante el try catch
                        const response = await createTaskRequest(values); //recordar que los valores son las tareas(el title y el description)
                        //esto devuelve una respuesta
                        console.log(response);
                        actions.resetForm() //esto permite resetear el boton al terminar de escribir con el actions
                    }catch(error){
                        //en caso de que ocurra un error que se muestre
                        console.log(error)

                    }

                }} //metodo para enviar el formulario
                >
                
                {/*Aqui hace un llamado a la conexión de handleChange, handleSubmit y values que obtiene los valores de arriba iniciales */}
                {/*Submitting entrega que en caso de que esta escribiendo la persona se coloque en true y asi se pueda detectar por ejemplo para desactivar el boton y no haya errores */}
                {({handleChange , handleSubmit, values, isSubmitting}) =>( //Se crea una función para la ejecución del form. Por ende primero es Formik, luego la función y dentro el formulario
                    //Se crea esta función con el fin de poder hacer uso del handlechange y asi se guarde en las variables de Formik, mientras se valla llenando de forma automatica se vaya agregando, eso es la ventaja
                    //Además ahora para que haga uso de la ejecución de Formik se hace el llamado
                    <Form onSubmit={handleSubmit}> {/**De esta forma al enviar el submit en el button se hace el llamado del submit de formik para mostrar los valores */}
                        <label>Title</label>
                        <input type="text" name="title" placeholder="Write a title" onChange={handleChange} value={values.title}/> {/*Importante hacer uso de name para que reconozca formik y poder guardarlo en la variable especifica*/}

                        <label>Description</label>
                        <textarea name="description" rows="3" placeholder="Write a description" onChange={handleChange} value={values.description}></textarea>

                        <button type="submit" disabled={isSubmitting}> {/*Deshabilitar el boton en caso de que el isSubmiting(editando) este encendido, esto hace que si se apreta varias veces el enter no se envie muchos */}
                            {isSubmitting ? "Guardando" : "Save"} {/**Cuando deja de enviar el boton isSubmitting se coloca en of haciendo que muestre save y pueda envair */}
                        </button>
                    </Form>
                )} 

                
            </Formik>
        </div>
    )
}