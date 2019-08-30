let app = new Vue({
    el: '#app',
    data: {
        lists: [ ]
    }, 
    methods: {
        addList() {
            const newList = {
                name: '',
                status: 'creating',
                tasks: [ ]
            };

            this.lists.push(newList);
        },
        saveList(list){
            if(this.verifyEmptyList(list)){
                alert('The list can`t be empty');
            } else {
                list.status = 'saved';
            }
        },
        removeList(index){
            this.lists.splice(index, 1);
        },
        addTask(index){
            const info = document.getElementById('task'+index).value;
            const newTask = {
                info: info
            };
            
            if(this.verifyEmptyTask(newTask)){
                alert('The task can`t be empty!');
            } else {
                this.lists[index].tasks.push(newTask);
                document.getElementById('task'+index).value = '';
            }
        },
        deleteTask(tasks, index){
            tasks.splice(index, 1);
        },
        updateTask(){
            alert('Here UPDATE task');
        },
        verifyEmptyTask(task){
            if(task.info == ''){
                return true;
            } else {
                return false;
            }
        },
        verifyEmptyList(list){
            if(list.name == ''){
                return true;
            } else {
                return false;
            }
        }
    }
});