// $(function () {
//     const $username = $('.username');

//     $username.on("change", function(e){
//         const value = $username.val().trim();

//         if(value.length < 6){
//             $username.addClass('invalid');
//         }
//         else {
//             $username.removeClass('invalid');
//         }
//     });
//     const $h1 = createListItem('abc');

//   $username.after($h1);
// })

// function createListItem(item){
//     const $h1 = $('<h1 />', {
//         class: 'heading';
//         text: 'asflkaslfkna';
//         onclick: function(){
//             console.log('click')
//         }
//     });


//     return $h1;
// }


// const tasks = [
//     {
//       id: 1,
//       text: 'Học jQuery',
//       completed: false,
//     },
//     {
//       id: 2,
//       text: 'Học Java Core',
//       completed: true,
//     },
//     {
//       id: 3,
//       text: 'Học Database',
//       completed: true,
//     },
//   ];


//   function createTask (task){
//     //   id, text, completed
//     const $li = $(`<li>${task.text}</li>`);

//     const $btn = $('<button>Done</button>');

//     $btn.on('click', function (){
//         // chuyen task co id tuong ung thanh completed: true
//     });

//     $btn.appendTo($li);

//     return $li;
//   };


//   function createList(tasks){
//       const $list = [];
//       for (let i = 0; i < task.length; i++){
//           const $li = createTask(task[i]);
//           $list.push($li);
//       }

//       return $list;
//   };


//   $(function (){
//       const $list = $('.task-list');

//       const list = createList(tasks);

//       $.each(list, function (index, $item) {
//         $item.appendTo($list);
//       });
//   });

// const tasks = [
//     {
//       id: 1,
//       text: 'Học jQuery',
//       completed: false,
//     },
//     {
//       id: 2,
//       text: 'Học Java Core',
//       completed: true,
//     },
//     {
//       id: 3,
//       text: 'Học Database',
//       completed: true,
//     },
//   ];
  
//   function createTask(task) {
//     // id, text, completed
//     const $li = $(`<li>${task.text}</li>`);
//     const $btn = $('<button>Done</button>');
//     $btn.on('click', function () {
//       // chuyển task có id tương ứng thành completed: true
//       // kích hoạt lại sự kiện để render lại trang
//     });
  
//     $btn.appendTo($li);
  
//     return $li;
//   }
  
//   function createList(tasks) {
//     const list = [];
  
//     for (let i = 0; i < tasks.length; i++) {
//       const $li = createTask(tasks[i]);
//       list.push($li);
//     }
  
//     return list;
//   }
  
//   $(function () {
//     const $list = $('.task-list');
  
//     const list = createList(tasks);
  
//     $.each(list, function (index, $item) {
//       $item.appendTo($list);
//     });
//   });

const tasks = [
    {
      id: 1,
      text: 'Buy new laptop',
    },
    {
      id: 2,
      text: 'Complete all tasks',
    },
  ];
  
  function createNewTask(text) {
    tasks.push({
      id: Math.floor(Math.random() * 9000),
      text,
    });
  }
  
  function createItem(task) {
    const $template = $(
      document.querySelector('.task-item-template').content.firstElementChild
    ).clone();
  
    $template.find('.task-text').text(task.text);
    $template.find('.btn-delete').on('click', function () {
      deleteTask(task.id);
    });
  
    return $template;
  }
  
  function createList() {
    const list = tasks.map(function (task) {
      return createItem(task);
    });
  
    return list;
  }
  
  function render() {
    const $list = $('.task-list');
    const list = createList();
  
    $list.html('');
    $list.append(...list);
  }
  
  function handleFormSubmit(e) {
    e.preventDefault();
  
    const $input = $('.form-text');
    const text = $input.val().trim();
  
    if (text.length == 0) return;
  
    createNewTask(text);
    render();
    $input.val('');
  }
  
  function deleteTask(id) {
    const index = tasks.findIndex(function (task) {
      return task.id == id;
    });
  
    if (index !== -1) {
      tasks.splice(index, 1);
    }
  
    render();
  }
  
  function clearAll() {
    tasks.length = 0;
    render();
  }
  
  $(function () {
    $('.task-form').on('submit', handleFormSubmit);
    $('.btn-clear').on('click', clearAll);
    render();
  });
  