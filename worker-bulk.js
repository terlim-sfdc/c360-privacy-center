const a45_0x2a5f28=a45_0x4540;(function(_0x4545d1,_0x11ee09){const _0x7e44d1=a45_0x4540,_0x35c493=_0x4545d1();while(!![]){try{const _0x1dfad6=-parseInt(_0x7e44d1(0x1f8))/0x1+parseInt(_0x7e44d1(0x1dd))/0x2*(parseInt(_0x7e44d1(0x1ea))/0x3)+parseInt(_0x7e44d1(0x1fc))/0x4*(-parseInt(_0x7e44d1(0x1e5))/0x5)+-parseInt(_0x7e44d1(0x1dc))/0x6+parseInt(_0x7e44d1(0x1cc))/0x7+parseInt(_0x7e44d1(0x1e1))/0x8+-parseInt(_0x7e44d1(0x1ce))/0x9*(-parseInt(_0x7e44d1(0x1ca))/0xa);if(_0x1dfad6===_0x11ee09)break;else _0x35c493['push'](_0x35c493['shift']());}catch(_0x3c9daf){_0x35c493['push'](_0x35c493['shift']());}}}(a45_0x57d5,0xf3456),require(a45_0x2a5f28(0x1c8))['config']());const v8=require('v8'),throng=require(a45_0x2a5f28(0x1f3)),{maxJobsPerWorkerHeavyNetwork,workers}=require('./settings'),{BulkUpdateError}=require(a45_0x2a5f28(0x1d2)),{handleJobCompleted,handleJobFailure,handleJobStalled}=require(a45_0x2a5f28(0x1e6)),SalesforceModel=require(a45_0x2a5f28(0x1d3)),DBModel=require(a45_0x2a5f28(0x1f1));function a45_0x4540(_0x30195b,_0x514a6c){const _0x57d5cd=a45_0x57d5();return a45_0x4540=function(_0x454073,_0x14d999){_0x454073=_0x454073-0x1c6;let _0x130fb7=_0x57d5cd[_0x454073];return _0x130fb7;},a45_0x4540(_0x30195b,_0x514a6c);}if(!process[a45_0x2a5f28(0x1cb)]['REDIS_URL']){console['log'](a45_0x2a5f28(0x1d5));return;}function a45_0x57d5(){const _0x5c3b19=['Modify\x20Phase\x20Completion','executionId','./errors','./models/salesforce','stalled','REDIS_URL\x20is\x20not\x20set,\x20will\x20not\x20proceed!','stringify','\x20executionId:\x20','failed','heap_size_limit','./models/queue','SIGTERM','7924902DJkeCD','48902mvwlLd','MODIFY','data','Bulk\x20update\x20error','10440344QMlKiP','./controllers/worker/worker-utils/phase-flag','SPECIAL','toFixed','5FpgKyi','./controllers/worker/worker-utils/job-gateway','process','The\x20Modification\x20Phase\x20has\x20failed\x20with\x20result:\x20','bulk-updater','123spZaBS','log','./controllers/worker/bulk-updater','name','\x20mb','./utils/memory-utils','enableEndPhaseRetries','./models/database','completed','throng','\x20\x20\x20maxHeapSize:\x20','getHeapStatistics','error','once','513516KpWIwH','run','\x20-\x20objectName:\x20','\x20job\x20started\x20-\x20jobId:','1531832YXHaje','Bulk\x20update\x20results:\x20','Throng\x20worker\x20started\x20with\x20id:\x20','dotenv','success','1510HNbtmH','env','3268552TmaVSa','policyName','26181UKBTbd','objectName'];a45_0x57d5=function(){return _0x5c3b19;};return a45_0x57d5();}const {bulkQueue,modifyQueue,upStateQueue}=require(a45_0x2a5f28(0x1da)),BulkUpdater=require(a45_0x2a5f28(0x1ec)),{insertPhaseFlag,PHASE_FLAG_TYPES}=require(a45_0x2a5f28(0x1e2)),{runGC}=require(a45_0x2a5f28(0x1ef));throng({'worker':startWorker,'count':workers,'lifetime':Infinity,'grace':0x1388});async function startWorker(_0x3c43d7,_0x9f3ddd){const _0x3acd94=a45_0x2a5f28,_0x53b303=v8[_0x3acd94(0x1f5)]();console[_0x3acd94(0x1eb)](_0x3acd94(0x1c7)+_0x3c43d7+_0x3acd94(0x1f4)+(_0x53b303[_0x3acd94(0x1d9)]/0x400/0x400)[_0x3acd94(0x1e4)](0x0)+_0x3acd94(0x1ee)),process[_0x3acd94(0x1f7)](_0x3acd94(0x1db),_0x4eeb73),process['once']('SIGINT',_0x4eeb73);function _0x4eeb73(){const _0x29ceac=_0x3acd94;console[_0x29ceac(0x1eb)]('Throng\x20worker\x20id:\x20'+_0x3c43d7+'\x20shutdown\x20invoked.'),_0x9f3ddd();}const _0x186df6=new DBModel(),_0x59cdbe=new SalesforceModel();bulkQueue[_0x3acd94(0x1e7)](maxJobsPerWorkerHeavyNetwork,async _0x1160b4=>{const _0x3d689a=_0x3acd94;_0x1160b4[_0x3d689a(0x1ed)]=_0x3d689a(0x1e9),console[_0x3d689a(0x1eb)](_0x1160b4[_0x3d689a(0x1ed)]+_0x3d689a(0x1fb)+_0x1160b4['id']+'\x20-\x20policyName:\x20'+_0x1160b4['data'][_0x3d689a(0x1cd)]+_0x3d689a(0x1d7)+_0x1160b4['data'][_0x3d689a(0x1d1)]+_0x3d689a(0x1fa)+_0x1160b4[_0x3d689a(0x1df)][_0x3d689a(0x1cf)]);try{const _0x59e903=new BulkUpdater({'job':_0x1160b4,'salesforce':_0x59cdbe,'db':_0x186df6,'modifyQueue':modifyQueue,'bulkQueue':bulkQueue,'upStateQueue':upStateQueue}),_0x1dceb2=await _0x59e903[_0x3d689a(0x1f9)]();console[_0x3d689a(0x1eb)](_0x3d689a(0x1c6)+JSON[_0x3d689a(0x1d6)](_0x1dceb2));if(_0x1dceb2[_0x3d689a(0x1f0)]){const _0x1691ac=await insertPhaseFlag(_0x186df6,_0x1160b4[_0x3d689a(0x1df)]['executionId'],_0x3d689a(0x1de),PHASE_FLAG_TYPES[_0x3d689a(0x1e3)],_0x3d689a(0x1f0));}if(!_0x1dceb2[_0x3d689a(0x1c9)])throw new BulkUpdateError(_0x1dceb2[_0x3d689a(0x1f6)]);}catch(_0x4a2618){_0x4a2618 instanceof BulkUpdateError?console[_0x3d689a(0x1f6)](_0x3d689a(0x1e0),_0x4a2618):console[_0x3d689a(0x1f6)]('bulk-updater\x20error',_0x4a2618);throw _0x4a2618;}finally{runGC();}});for(const _0x22ebd3 of[bulkQueue]){_0x22ebd3['on'](_0x3acd94(0x1f2),async(_0x23ea7e,_0x380c0a)=>{await handleJobCompleted(_0x23ea7e,_0x380c0a);}),_0x22ebd3['on'](_0x3acd94(0x1d4),async _0xe32412=>{await handleJobStalled(_0xe32412);});}bulkQueue['on'](_0x3acd94(0x1d8),async(_0x572ba6,_0x1adc36)=>{const _0x1cf835=_0x3acd94;await handleJobFailure(_0x572ba6,_0x1adc36,_0x1cf835(0x1d0),_0x1cf835(0x1e8)+_0x1adc36+'.');});}