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
            list.status = 'saved';
        },
        removeList(index){
            this.lists.splice(index, 1);
        },
        addTask(index){
            const info = document.getElementById('task'+index).value;
            const newTask = {
                info: info
            };
            this.lists[index].tasks.push(newTask);
            document.getElementById('task'+index).value = '';
        }
    }
});