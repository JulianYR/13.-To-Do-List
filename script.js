const add = document.getElementById('add')
add.addEventListener('click', addTask)


const task1 = document.getElementById('task1')
const delete1 = document.getElementById('delete1').addEventListener('click', d1)

const task2 = document.getElementById('task2')
const delete2 = document.getElementById('delete2').addEventListener('click', d2)

const task3 = document.getElementById('task3')
const delete3 = document.getElementById('delete3').addEventListener('click', d3)

const task4 = document.getElementById('task4')
const delete4 = document.getElementById('delete4').addEventListener('click', d4)

const task5 = document.getElementById('task5')
const delete5 = document.getElementById('delete5').addEventListener('click', d5)


const result = document.getElementById('result')

function addTask(){

    const inputText = document.getElementById('inputText')
    const inputValue = inputText.value.trim()

    if (inputValue.value === ''){
        return 
    }
    else if (inputValue.value !== ''){
        if (task1.innerHTML == ''){
            task1.innerHTML = inputText.value
            result.innerHTML = 'Added Task'
        }
        else {
            if (task2.innerHTML == ''){
                task2.innerHTML = inputText.value
                result.innerHTML = 'Added Task'
            }
            else {
                if (task3.innerHTML == ''){
                    task3.innerHTML = inputText.value
                    result.innerHTML = 'Added Task'
                }
                else {
                    if (task4.innerHTML == ''){
                        task4.innerHTML = inputText.value
                        result.innerHTML = 'Added Task'
                    }
                    else {
                        if (task5.innerHTML == ''){
                            task5.innerHTML = inputText.value
                            result.innerHTML = 'Added Task'
                        }
                        else {
                            result.innerHTML = 'Sorry max task reached'
                        }
                    }
                }
            }
        }
    }

}

function d1(){
    task1.innerHTML = ''
}
function d2(){
    task2.innerHTML = ''
}
function d3(){
    task3.innerHTML = ''
}
function d4(){
    task4.innerHTML = ''
}
function d5(){
    task5.innerHTML = ''
}