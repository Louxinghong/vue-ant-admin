<template>
  <div class="todo-list">
    <div class="content">
      <a-input class="todo-input" placeholder="Basic usage" v-model="taskInput">
        <a-icon slot="prefix" type="container" theme="filled" />
        <a-icon
          v-if="taskInput !== ''"
          slot="suffix"
          type="plus-circle"
          @click="onAddTask"
        />
      </a-input>

      <div class="operation" v-if="taskList.length > 0">
        <span @click="onCompleteAll"
          ><a-icon type="check" /> Complete all tasks</span
        >
        <span @click="onClearAll"
          ><a-icon type="delete" /> Clear all tasks</span
        >
      </div>

      <a-divider v-if="taskList.length > 0" />

      <div class="task-container">
        <div class="task" v-for="(item, index) in taskList" :key="item.id">
          <a-icon v-if="!item.isFinished" type="form" />
          <a-icon v-else type="check-circle"></a-icon>
          <span
            :class="{ name: true, finished: item.isFinished }"
            @click="onFinishTask(item.id)"
            >{{ item.name }}</span
          >
          <a-icon type="close-circle" @click="onDeleteTask(index)" />
        </div>
      </div>

      <a-divider v-if="unFinishedNumber > 0" />

      <div class="unfinished-number" v-if="unFinishedNumber > 0">
        {{ unFinishedNumber }}
        <span>{{ unFinishedNumber > 1 ? "tasks" : "task" }} left</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      taskInput: "",
      taskList: [],
    };
  },
  computed: {
    unFinishedNumber() {
      let findNumber = 0;
      this.taskList.forEach((item) => {
        if (!item.isFinished) {
          findNumber++;
        }
      });
      return findNumber;
    },
  },
  methods: {
    onAddTask() {
      let totalLength = this.taskList.length;
      this.taskList.push({
        id: totalLength + 1,
        name: this.taskInput,
        isFinished: false,
      });
      this.taskInput = "";
    },
    onCompleteAll() {
      this.taskList.forEach((item) => {
        item.isFinished = true;
      });
    },
    onClearAll() {
      this.taskList = [];
    },
    onFinishTask(id) {
      let findData = this.taskList.find((item) => item.id === id);
      findData.isFinished = !findData.isFinished;
    },
    onDeleteTask(index) {
      this.taskList.splice(index, 1);
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  margin: 10px 0;
  padding: 0 1.5% 5px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 13px rgba(0, 0, 0, 0.2);

  .todo-input {
    width: 100%;
    margin: 12px 0;
    font-size: 24px;

    /deep/ .ant-input {
      width: 100%;
      height: 65px;
      padding-left: 45px;
      background: #dddddd;
      font-size: 24px;
      border-radius: 10px;
    }

    .anticon-plus-circle {
      cursor: pointer;
    }
  }

  .operation {
    display: flex;
    justify-content: space-between;
    width: 100%;

    span {
      cursor: pointer;
    }
  }

  .ant-divider {
    width: 100%;
    min-width: 100%;
    margin: 5px 0;
  }

  .task-container {
    max-height: 300px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      /* 滚动条样式 */
      width: 6px; /* 高宽分别对应横竖滚动条的尺寸 */
      height: 0;
    }
    &::-webkit-scrollbar-thumb {
      /* 滚动条滑块 */
      border-radius: 6px;
      /* -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); */
      background: rgba(195, 195, 196, 0.5);
    }
    &::-webkit-scrollbar-track {
      /* 滚动槽 */
      /* -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); */
      border-radius: 5px;
      background: transparent;
    }

    .task {
      position: relative;
      width: 99.9%;
      padding: 12px;
      display: flex;
      align-items: center;
      font-size: 22px;
      border-radius: 10px;

      .name {
        margin-left: 15px;
        cursor: pointer;
      }

      .finished {
        text-decoration: line-through;
        text-decoration-color: #555555;
      }

      .anticon-close-circle {
        display: none;
        position: absolute;
        right: 10px;
        cursor: pointer;
      }

      &:hover {
        background: #dbdbdb;

        .anticon-close-circle {
          display: inline;
        }
      }
    }
  }

  .unfinished-number {
    font-size: 22px;
  }
}
</style>
