const a9_0x247487=a9_0xce19;(function(_0x3aa22c,_0x53b877){const _0x334814=a9_0xce19,_0x462050=_0x3aa22c();while(!![]){try{const _0x2fb1ac=parseInt(_0x334814(0x168))/0x1+-parseInt(_0x334814(0x13e))/0x2*(-parseInt(_0x334814(0x147))/0x3)+-parseInt(_0x334814(0x16c))/0x4*(parseInt(_0x334814(0x149))/0x5)+-parseInt(_0x334814(0x179))/0x6+parseInt(_0x334814(0x144))/0x7+parseInt(_0x334814(0x15f))/0x8+-parseInt(_0x334814(0x14f))/0x9;if(_0x2fb1ac===_0x53b877)break;else _0x462050['push'](_0x462050['shift']());}catch(_0x3d6826){_0x462050['push'](_0x462050['shift']());}}}(a9_0x5b29,0x90699));const requiredParam=require(a9_0x247487(0x16a)),{globalJobSettings,retryJobSettings}=require(a9_0x247487(0x140)),{JobSubmissionError}=require(a9_0x247487(0x167)),SalesforceModel=require(a9_0x247487(0x163)),{updateJobCounter}=require(a9_0x247487(0x155)),salesforce=new SalesforceModel();function a9_0xce19(_0x1cce2b,_0x182141){const _0x5b297f=a9_0x5b29();return a9_0xce19=function(_0xce1917,_0x5d8541){_0xce1917=_0xce1917-0x13d;let _0x3cecdd=_0x5b297f[_0xce1917];return _0x3cecdd;},a9_0xce19(_0x1cce2b,_0x182141);}async function handleJobSubmission({queue:queue=requiredParam(a9_0x247487(0x170)),jobType:jobType=requiredParam('jobType'),jobData:jobData=requiredParam(a9_0x247487(0x160)),enableRetries:enableRetries=![],bullJobOptOverrides:bullJobOptOverrides=null,skipCounters:skipCounters=![],noJobName:noJobName=![]}){const _0x3eb0b6=a9_0x247487,_0x574d8f=enableRetries?retryJobSettings:null,_0xd71834={...globalJobSettings,..._0x574d8f,...bullJobOptOverrides};try{if(!skipCounters)await updateJobCounter(jobData[_0x3eb0b6(0x16e)],jobType,_0x3eb0b6(0x175),'INCREMENT');let _0x59e631;noJobName?_0x59e631=await queue[_0x3eb0b6(0x176)](jobData,_0xd71834):_0x59e631=await queue['add'](jobType,jobData,_0xd71834);if(!skipCounters)await updateJobCounter(jobData[_0x3eb0b6(0x16e)],jobType,_0x3eb0b6(0x159),_0x3eb0b6(0x156));return _0x59e631;}catch(_0x3112c5){if(!skipCounters)await updateJobCounter(jobData[_0x3eb0b6(0x16e)],jobType,_0x3eb0b6(0x150),_0x3eb0b6(0x156));console[_0x3eb0b6(0x165)](_0x3eb0b6(0x171)+jobType+_0x3eb0b6(0x146)+JSON[_0x3eb0b6(0x15d)](_0xd71834)+'\x20and\x20jobData(sliced\x20200):\x20'+JSON[_0x3eb0b6(0x15d)](jobData)[_0x3eb0b6(0x14c)](0x0,0xc8));throw new JobSubmissionError(_0x3eb0b6(0x171)+jobType);}}async function handleJobCompleted(_0x567c73,_0x3986f4){const _0x19cdbc=a9_0x247487;console[_0x19cdbc(0x141)](_0x19cdbc(0x142)+_0x567c73[_0x19cdbc(0x145)]+'\x20id:'+_0x567c73['id']+_0x19cdbc(0x162)+(_0x567c73[_0x19cdbc(0x13d)]['objectName']?_0x19cdbc(0x157)+_0x567c73[_0x19cdbc(0x13d)][_0x19cdbc(0x166)]:'')+(_0x567c73[_0x19cdbc(0x13d)][_0x19cdbc(0x13f)]?'\x20schemaObject:'+_0x567c73['data']['schemaObject']:'')+(_0x567c73[_0x19cdbc(0x13d)][_0x19cdbc(0x14b)]?_0x19cdbc(0x172)+_0x567c73[_0x19cdbc(0x13d)]['recordRetention']:'')),await updateJobCounter(_0x567c73[_0x19cdbc(0x13d)]['executionId'],_0x567c73[_0x19cdbc(0x145)],_0x19cdbc(0x14d),_0x19cdbc(0x156));}async function handleJobFailure(_0x589bd5,_0x3ca9fd,_0x41be85,_0x31a73a){const _0x3f03d9=a9_0x247487,_0x287534={'jobName':_0x589bd5[_0x3f03d9(0x145)],'jobQueueName':_0x589bd5[_0x3f03d9(0x170)][_0x3f03d9(0x145)],'jobOpts':_0x589bd5[_0x3f03d9(0x178)],'jobData':_0x589bd5['data'],'jobFailedReason':_0x589bd5[_0x3f03d9(0x16d)]};_0x287534[_0x3f03d9(0x160)]['batchRecords']='OMITTED',console[_0x3f03d9(0x165)](_0x3f03d9(0x148)+_0x589bd5['name']+_0x3f03d9(0x169)+_0x589bd5['id']+(_0x589bd5[_0x3f03d9(0x13d)][_0x3f03d9(0x13f)]?_0x3f03d9(0x153)+_0x589bd5['data']['schemaObject']:'')+'\x20'+(_0x589bd5['data'][_0x3f03d9(0x14b)]?_0x3f03d9(0x174)+_0x589bd5[_0x3f03d9(0x13d)][_0x3f03d9(0x14b)]:'')+'\x20has\x20failed\x20with\x20result:\x20'+JSON['stringify'](_0x3ca9fd)+'\x20-\x20jobExtract:\x20',_0x287534),console[_0x3f03d9(0x141)](_0x3f03d9(0x15e)+_0x589bd5['id']+'\x20attemptsMade:'+_0x589bd5[_0x3f03d9(0x164)]+_0x3f03d9(0x16f)+_0x589bd5['opts'][_0x3f03d9(0x14a)]+_0x3f03d9(0x151)+(_0x589bd5[_0x3f03d9(0x178)][_0x3f03d9(0x14a)]-_0x589bd5[_0x3f03d9(0x164)])),await updateJobCounter(_0x589bd5[_0x3f03d9(0x13d)][_0x3f03d9(0x16e)],_0x589bd5['name'],_0x3f03d9(0x177),_0x3f03d9(0x156)),_0x589bd5[_0x3f03d9(0x164)]>=_0x589bd5['opts'][_0x3f03d9(0x14a)]&&(console['error'](_0x3f03d9(0x152)+_0x589bd5['id']+_0x3f03d9(0x143)),await updateJobCounter(_0x589bd5[_0x3f03d9(0x13d)][_0x3f03d9(0x16e)],_0x589bd5[_0x3f03d9(0x145)],_0x3f03d9(0x15b),_0x3f03d9(0x156)),await salesforce['insertRunLog'](_0x589bd5['data'][_0x3f03d9(0x16e)],_0x589bd5['data'][_0x3f03d9(0x154)],'Error',_0x41be85,_0x31a73a));}function a9_0x5b29(){const _0x1d0a11=['../../../models/salesforce','attemptsMade','error','objectName','../../../errors/job-errors','211482cgqUiO','\x20id:','../../../utils/required-param','\x20has\x20stalled!\x20-\x20jobExtract:\x20','4zuMoYQ','failedReason','executionId','\x20attempts:','queue','Error\x20submitting\x20jobType:\x20','\x20retentionType:','One\x20or\x20more\x20intermediary\x20jobs\x20have\x20stalled.','retentionType:','submitted','add','failed','opts','1352358hSdJgk','data','105584apPCHs','schemaObject','../../../settings','log','Job\x20type:','\x20!!!!!!','3796891vChqNp','name','\x20with\x20jobOptions:\x20','48ZcBjwv','!!!\x20Job\x20type:','2894980fHEkIv','attempts','recordRetention','slice','completed','Error','5693805bzfPTP','failed_sub','\x20attemptsRemaing:','!!!!!!\x20MAXIMUM\x20RETRIES\x20REACHED\x20for\x20id:','\x20schemaObject:','policyName','./job-counters','INCREMENT','\x20objectName:','stalled','successful_sub','insertRunLog','failed_all','Phase\x20Completion','stringify','id:','3439840hIrUrd','jobData','exports','\x20completed!'];a9_0x5b29=function(){return _0x1d0a11;};return a9_0x5b29();}async function handleJobStalled(_0x286324){const _0x2b6d9c=a9_0x247487,_0x31c836={'jobName':_0x286324[_0x2b6d9c(0x145)],'jobQueueName':_0x286324[_0x2b6d9c(0x170)][_0x2b6d9c(0x145)],'jobOpts':_0x286324['opts'],'jobData':_0x286324[_0x2b6d9c(0x13d)],'jobFailedReason':_0x286324['failedReason']};console[_0x2b6d9c(0x165)](_0x2b6d9c(0x148)+_0x286324[_0x2b6d9c(0x145)]+_0x2b6d9c(0x169)+_0x286324['id']+(_0x286324[_0x2b6d9c(0x13d)][_0x2b6d9c(0x13f)]?'\x20schemaObject:'+_0x286324[_0x2b6d9c(0x13d)]['schemaObject']:'')+'\x20'+(_0x286324[_0x2b6d9c(0x13d)][_0x2b6d9c(0x14b)]?'retentionType:'+_0x286324[_0x2b6d9c(0x13d)][_0x2b6d9c(0x14b)]:'')+_0x2b6d9c(0x16b),_0x31c836),await salesforce[_0x2b6d9c(0x15a)](_0x286324[_0x2b6d9c(0x13d)][_0x2b6d9c(0x16e)],_0x286324['data'][_0x2b6d9c(0x154)],_0x2b6d9c(0x14e),_0x2b6d9c(0x15c),_0x2b6d9c(0x173)),await updateJobCounter(_0x286324[_0x2b6d9c(0x13d)][_0x2b6d9c(0x16e)],_0x286324[_0x2b6d9c(0x145)],_0x2b6d9c(0x158),'INCREMENT');}module[a9_0x247487(0x161)]={'handleJobSubmission':handleJobSubmission,'handleJobCompleted':handleJobCompleted,'handleJobFailure':handleJobFailure,'handleJobStalled':handleJobStalled};