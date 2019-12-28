<template>
  <div class="recruit-card-container">
    <table>
      <thead>
        <tr>
          <th>포지션</th>
          <th>내용</th>
          <th>기간</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(data, index) in datas"
          :key="index">
          <td class="position">{{ data.position }}</td>
          <td class="contents">
            <div
              class="name"
              @click="goDetailPage(data.path[0], index)">
              {{ data.contents.name }}
            </div>
            <div class="tags">
              <tag
                v-for="(tag, index) in data.contents.tags"
                :key="index"
                :name="tag"
              />
            </div>
          </td>
          <td class="period">
            {{ data.period }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import recruitDatas from '../../../../static/recruitDatas';
import Tag from './Tag';
export default {
  name: "PositionCard",
  components: {
    'tag': Tag
  },
  data () {
    return {
      datas: null
    }
  },
  methods: {
    goDetailPage(path, index) {
      this.$router.push({ name: 'RecruitDetailPage', params: {id: path, data: recruitDatas[index]} });
    }
  },
  created() {
    this.datas = recruitDatas;
  }
}
</script>

<style scoped>
  .recruit-card-container {
    width: 1000px;
    margin: 75px auto 0 auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  thead tr th {
    background: #77828f;
    color: #fff;
    font-family: AppleSDGothicNeoL00;
    font-size: 14px;
    padding: 7.5px 0;
    text-align: left;
    padding-left: 20px;
  }

  tbody tr td {
    height:150px;
    border-bottom: 1px solid #ebebeb;
    text-align: left;
    padding-left: 20px;
    box-sizing: border-box;
  }

  .position {
    width: 200px;
  }

  .name {
    font-family: AppleSDGothicNeoB00;
    font-size: 25px;
    color: #454545;
    margin-bottom: 5px;
    cursor: pointer;
  }

  .tags {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

</style>