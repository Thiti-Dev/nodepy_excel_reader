import {spawn} from 'child_process'
import * as json5 from 'json5'

function spawn_pytohn_script(filename:string){
    return spawn('py',["core.py",filename],{
        // cwd:process.cwd(),
        // detached: false,
        // stdio: "inherit"
    })
}

export function csv_to_array_object(filename): Promise<Array<any>>{
    const pyscript = spawn_pytohn_script(filename)
    const pipe_data = []
    return new Promise((resolve, reject) => {
        pyscript.stdout.on('data',function(data){
            pipe_data.push(data)
        })
    
        pyscript.on('close',(code) => {
            const data = pipe_data.join("")
            // the data from python would be like -> {'vocaburary': 'test'}
            // we need to change the single ' to the " in order to make it parseable
            // or alternatively use json5 likes below
            const parsed_data = json5.parse(data)
            resolve(parsed_data)
        })
    })
    
}