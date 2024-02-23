const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/student')
.then(()=>console.log('database connected successfully'))
.catch((e)=>console.log('not connected',e))

//Academic Record Schema
const academicRecordSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required:true
  },
  grades: {
    type: Map,
    of: String,
    required: true
  },
  subjects: [{
    type: String,
    required: true
  }]
})

//Academic Record Model
const academicRecord = mongoose.model('AcademicRecord',academicRecordSchema);


//Co-curricular Activities Schema
const cocurricularActivitiesSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required:true
  },
  activityType: {
    type: String,
    required: true
  },
  duartion: {
    type: String,
    required: true
  },
  achievements: [{
    type: String,
    required: true
  }]
})

//Co-curricular Activities Model
const cocurricularActivities = mongoose.model('cocurricularActivities',cocurricularActivitiesSchema);

// const createDocument = async()=>{
//   try{
//     //Populate Academic Records
//     const allData = await academicRecord.create([
//       {
//         studentID: '1',
//         name: 'rahul',
//         grades: {
//           Maths: 'S',
//           Physics: 'B',
//           Chemistry: 'A'
//         },
//         subjects: ['Maths','Physics','Chemistry']
//       },
//       {
//         studentID: '2',
//         name: 'aman',
//         grades: {
//           Maths: 'A',
//           Physics: 'S',
//           Chemistry: 'A'
//         },
//         subjects: ['Maths','Physics','Chemistry']
//       },
//       {
//         studentID: '3',
//         name: 'kajal',
//         grades: {
//           Maths: 'S',
//           Physics: 'S',
//           Chemistry: 'A'
//         },
//         subjects: ['Maths','Physics','Chemistry']
//       },
//       {
//         studentID: '4',
//         name: 'sandy',
//         grades: {
//           Maths: 'A',
//           Physics: 'B',
//           Chemistry: 'B'
//         },
//         subjects: ['Maths','Physics','Chemistry']
//       }
//     ])

//     //Populate Co-curricular activities
//     const allData2 = await cocurricularActivities.create([
//       {
//         studentID: '11',
//         name: 'rahul',
//         activityType: 'drawing',
//         duartion: '1 hr',
//         achievements: ['a','b','c']
//       },
//       {
//         studentID: '22',
//         name: 'aman',
//         activityType: 'swimming',
//         duartion: '20 min',
//         achievements: ['first','second']
//       },
//       {
//         studentID: '33',
//         name: 'kajal',
//         activityType: 'running',
//         duartion: '2 hr',
//         achievements: ['1','2','3']
//       },
//       {
//         studentID: '44',
//         name: 'sandy',
//         activityType: 'painting',
//         duartion: '1 hr',
//         achievements: ['A','B']
//       },
//     ])
//     console.log('populated successfully');

//   }
//   catch(e){
//     console.log('error',e);
//   }
// }
// createDocument();



// const getDocument = async()=>{
//   const result1 = await academicRecord.find();
//   console.log(result1);

//   const result2 = await cocurricularActivities.find();
//   console.log(result2);
// }
// getDocument();




const updateDocument = async()=>{
  try{
    const update = await academicRecord.updateOne(
      {name:'rahul'},
      {$set: {name:'anjali'}}
    )
    console.log(update);

    const update2 = await cocurricularActivities.updateOne(
      {name:'sandy'},
      {$set: {name:'aadya'}}
    )
    console.log(update2);
  }
  catch(e){
    console.log('error',e);
  }
}
updateDocument();



//delete
// const deleteDocument = async()=>{
//   try{
//     const result1 = await academicRecord.deleteOne(
//       {studentID: '4'}
//     )
//     console.log(result1);

//     const result2 = await cocurricularActivities.deleteOne(
//       {studentID: '33'}
//     )
//     console.log(result2);
//   }
//   catch(e){
//     console.log('error',e)
//   }
// }
// deleteDocument();