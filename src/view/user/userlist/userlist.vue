<template>
    <div>
        <div style="margin: 10px 0;display: flex">
            <el-button type="primary" @click="addUser" icon="el-icon-circle-plus-outline"> 添加用户 </el-button>
            <el-input  style="width: 500px;margin-left: 100px" placeholder="请输入内容" v-model="keywords" class="input-with-select">

                <el-select v-model="select" slot="prepend" placeholder="请选择" >
                    <el-option label="餐厅名" value="1"></el-option>
                    <el-option label="订单号" value="2"></el-option>
                    <el-option label="用户电话" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" @click="getUserList"></el-button>
            </el-input>

        </div>

        <!--显示用户详情-->
        <el-dialog  :title="detailUser.name+'的详细信息'" :visible.sync="detailmodalvisible" width="30%" >
            <el-form   label-width="80px" >
                <el-form-item label="头像">
                        <img v-if="form.img" :src="$cfg.STATIC_URL+form.img" class="avatar">
                </el-form-item>
                <el-form-item label="姓名">{{detailUser.name}}</el-form-item>
                <el-form-item label="性别">{{detailUser.gender}}</el-form-item>
                <el-form-item label="年龄">{{detailUser.age}}</el-form-item>
                <el-form-item label="电话">{{detailUser.tel}}</el-form-item>
                <el-form-item label="地址">{{detailUser.address}}</el-form-item>

            </el-form>
        </el-dialog>

        <!--添加用户-->
        <el-dialog  :title="form.id?'编辑用户':'添加用户'"  @open="$refs.frm.clearValidate()" :visible.sync="dialogVisible" width="30%" >
            <el-form v-loading="edituserloading" :model="form" label-width="80px" :rules="rules" ref="frm">
                <el-form-item label="头像"  prop="face">
                    <el-upload
                        class="avatar-uploader"
                        :action="uploadurl"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="form.img" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>

                <el-form-item label="姓名"  prop="name" required>
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="form.gender">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="年龄" prop="age">
                    <el-input v-model.number="form.age"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="tel" required>
                    <el-input v-model="form.tel"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input type="textarea" v-model="form.address"></el-input>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveUserInfo">保存</el-button>
            </span>
        </el-dialog>

        <el-table  :data="userlist" style="width: 100%" border v-loading="loading">
            <el-table-column prop="id" label="编号" width="80" align="center"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180" align="center">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column prop="address" label="住址" width="180" align="center"></el-table-column>
            <el-table-column prop="age" label="年龄" width="180" align="center"></el-table-column>
            <el-table-column prop="gender" label="性别" width="180" align="center"></el-table-column>
            <el-table-column prop="tel" label="电话" width="180" align="center"></el-table-column>
            <el-table-column label="操作" align="center" width="300px">
                <template slot-scope="scope">
                    <el-button size="mini" type="success" icon="el-icon-search" @click="detail(scope.row)">详情</el-button>
                    <el-button size="mini" type="warning" icon="el-icon-edit" @click="editUser(scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" icon="el-icon-delete" @click="delUser(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="text-align: center;margin: 10px 0;">
            <el-pagination
                    background
                    :page-size="pageSize"
                    layout="prev, pager, next"
                    :total="1000"
                    @current-change="getUserList()"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import  userlist from './userlist'
    export default userlist
    import './userlist.css'
</script>
