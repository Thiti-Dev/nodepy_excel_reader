import {csv_to_array_object} from './index'


(async() => {
    const x = await csv_to_array_object('dictionary.csv')
    console.log(x.length)
})()