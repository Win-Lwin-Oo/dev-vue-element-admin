/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
/* eslint-disable */
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  ViewTool: {
    nested: {
      loginRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          }
        }
      },
      loginReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Fail: 1,
              UnExist: 2,
              Inactive: 3,
              Incorrect: 4
            }
          }
        }
      },
      remittanceInfo: {
        fields: {
          orderNumber: {
            type: "string",
            id: 0
          },
          backAccHolder: {
            type: "string",
            id: 1
          },
          province: {
            type: "string",
            id: 2
          },
          bank: {
            type: "string",
            id: 3
          },
          cardNumber: {
            type: "string",
            id: 4
          },
          withdrawalAmount: {
            type: "int32",
            id: 5
          },
          actualAmount: {
            type: "int32",
            id: 6
          },
          completeTime: {
            type: "string",
            id: 7
          },
          operator: {
            type: "string",
            id: 8
          },
          orderStatus: {
            type: "int32",
            id: 9
          },
          remark: {
            type: "string",
            id: 10
          }
        }
      },
      inquireExportRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          },
          orderStatus: {
            type: "int32",
            id: 3
          },
          Export: {
            type: "int32",
            id: 4
          },
          pageIndex: {
            type: "int32",
            id: 5
          },
          pageSize: {
            type: "int32",
            id: 6
          }
        }
      },
      inquireExportReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          remittanceInfo: {
            rule: "repeated",
            type: "remittanceInfo",
            id: 1
          },
          totalNum: {
            type: "int32",
            id: 2
          },
          pageIndex: {
            type: "int32",
            id: 3
          },
          pageSize: {
            type: "int32",
            id: 4
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Fail: 1,
              UnExist: 2
            }
          }
        }
      },
      operateRequest: {
        fields: {
          orderNumber: {
            type: "string",
            id: 0
          },
          operation: {
            type: "int32",
            id: 1
          },
          operatorAccount: {
            type: "string",
            id: 2
          },
          remark: {
            type: "string",
            id: 3
          }
        }
      },
      existRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      existReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          exist: {
            type: "int32",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Fail: 1
            }
          }
        }
      },
      operateRemitReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          remittanceInfo: {
            type: "remittanceInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Fail: 1,
              UnExist: 2,
              Inactive: 3
            }
          }
        }
      }
    }
  },
  accountBill: {
    nested: {
      BillInfo: {
        fields: {
          tableName: {
            type: "string",
            id: 0
          },
          screenId: {
            type: "int32",
            id: 1
          },
          inningId: {
            type: "int32",
            id: 2
          },
          betTime: {
            type: "string",
            id: 3
          },
          resultTime: {
            type: "string",
            id: 4
          },
          gameType: {
            type: "GameType",
            id: 5
          },
          coinE: {
            type: "int32",
            id: 6
          },
          numZ: {
            type: "int32",
            id: 7
          },
          numX: {
            type: "int32",
            id: 8
          },
          numH: {
            type: "int32",
            id: 9
          },
          numZd: {
            type: "int32",
            id: 10
          },
          numXd: {
            type: "int32",
            id: 11
          },
          result: {
            type: "string",
            id: 12
          },
          coinB: {
            type: "int32",
            id: 13
          },
          tableId: {
            type: "int32",
            id: 14
          },
          billId: {
            type: "string",
            id: 15
          },
          account: {
            type: "string",
            id: 16
          },
          userName: {
            type: "string",
            id: 17
          },
          state: {
            type: "int32",
            id: 18
          },
          errInfo: {
            type: "string",
            id: 19
          },
          surplusCoin: {
            type: "int32",
            id: 20
          },
          compare: {
            type: "int32",
            id: 21
          },
          getNumber: {
            type: "int32",
            id: 22
          },
          getState: {
            type: "int32",
            id: 23
          },
          countDownEnd: {
            type: "string",
            id: 24
          },
          createAt: {
            type: "string",
            id: 25
          },
          winNum: {
            type: "int32",
            id: 26
          },
          drawFee: {
            type: "int32",
            id: 27
          },
          washFee: {
            type: "int32",
            id: 28
          },
          drawNum: {
            type: "int32",
            id: 29
          },
          washNum: {
            type: "int32",
            id: 30
          },
          billNum: {
            type: "int32",
            id: 31
          },
          checkDay: {
            type: "string",
            id: 32
          },
          propayCoin: {
            type: "string",
            id: 33
          },
          num1: {
            type: "int32",
            id: 34
          },
          num2: {
            type: "int32",
            id: 35
          },
          num3: {
            type: "int32",
            id: 36
          },
          num4: {
            type: "int32",
            id: 37
          },
          num5: {
            type: "int32",
            id: 38
          },
          num6: {
            type: "int32",
            id: 39
          },
          num7: {
            type: "int32",
            id: 40
          },
          num8: {
            type: "int32",
            id: 41
          },
          isCommission: {
            type: "int32",
            id: 42
          },
          betType: {
            type: "int32",
            id: 43
          },
          betNum: {
            type: "int32",
            id: 44
          }
        }
      },
      BillTotal: {
        fields: {
          totalZ: {
            type: "int32",
            id: 0
          },
          totalX: {
            type: "int32",
            id: 1
          },
          totalH: {
            type: "int32",
            id: 2
          },
          totalZd: {
            type: "int32",
            id: 3
          },
          totalXd: {
            type: "int32",
            id: 4
          },
          totalWinNum: {
            type: "int32",
            id: 5
          },
          totalWashFee: {
            type: "int32",
            id: 6
          },
          totalDrawFee: {
            type: "int32",
            id: 7
          },
          result: {
            type: "string",
            id: 8
          },
          gameType: {
            type: "int32",
            id: 9
          },
          num1: {
            type: "int32",
            id: 10
          },
          num2: {
            type: "int32",
            id: 11
          },
          num3: {
            type: "int32",
            id: 12
          },
          num4: {
            type: "int32",
            id: 13
          },
          num5: {
            type: "int32",
            id: 14
          },
          num6: {
            type: "int32",
            id: 15
          },
          num7: {
            type: "int32",
            id: 16
          },
          num8: {
            type: "int32",
            id: 17
          },
          isCommission: {
            type: "int32",
            id: 25
          },
          da: {
            type: "int32",
            id: 26
          },
          xiao: {
            type: "int32",
            id: 27
          },
          dan: {
            type: "int32",
            id: 28
          },
          shuang: {
            type: "int32",
            id: 29
          },
          red: {
            type: "int32",
            id: 30
          },
          black: {
            type: "int32",
            id: 31
          },
          zhizhu: {
            type: "int32",
            id: 32
          },
          fenzhu: {
            type: "int32",
            id: 33
          },
          jiezhu: {
            type: "int32",
            id: 34
          },
          sanshu: {
            type: "int32",
            id: 35
          },
          jiaozhu: {
            type: "int32",
            id: 36
          },
          sishu: {
            type: "int32",
            id: 37
          },
          xianzhu: {
            type: "int32",
            id: 38
          },
          lunpanda: {
            type: "int32",
            id: 39
          },
          lunpanlie: {
            type: "int32",
            id: 40
          },
          quanwei: {
            type: "int32",
            id: 41
          },
          duizi: {
            type: "int32",
            id: 42
          },
          dandian: {
            type: "int32",
            id: 43
          },
          paijiu: {
            type: "int32",
            id: 44
          },
          zonghe: {
            type: "int32",
            id: 45
          },
          weitou: {
            type: "int32",
            id: 46
          }
        }
      },
      SimpleMemberInfo: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          }
        }
      },
      GetBillInfoByDayRequest: {
        fields: {
          date: {
            rule: "required",
            type: "string",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          },
          screenId: {
            type: "int32",
            id: 2
          },
          inningId: {
            type: "int32",
            id: 3
          },
          accountOrUserName: {
            type: "string",
            id: 4
          }
        }
      },
      GetBillInfoByDayReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          tableCount: {
            type: "int32",
            id: 1
          },
          screenCount: {
            type: "int32",
            id: 2
          },
          gameCount: {
            type: "int32",
            id: 3
          },
          billCount: {
            type: "int32",
            id: 4
          },
          members: {
            rule: "repeated",
            type: "SimpleMemberInfo",
            id: 5
          },
          compareId: {
            type: "int32",
            id: 6
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              MemberNotExist: 1,
              BillNotExist: 2,
              ErrorParams: 3,
              Faild: 4
            }
          }
        }
      },
      GetBillInfoRequest: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          screenId: {
            type: "int32",
            id: 1
          },
          inningId: {
            type: "int32",
            id: 2
          },
          getNumber: {
            type: "int32",
            id: 3
          },
          account: {
            type: "string",
            id: 4
          },
          gameId: {
            type: "string",
            id: 5
          }
        }
      },
      GetBillInfoReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          getNumber: {
            type: "int32",
            id: 1
          },
          compareResult: {
            type: "int32",
            id: 2
          },
          info: {
            type: "BillTotal",
            id: 3
          },
          tableId: {
            type: "int32",
            id: 4
          },
          screenId: {
            type: "int32",
            id: 5
          },
          inningId: {
            type: "int32",
            id: 6
          },
          gameId: {
            type: "string",
            id: 7
          },
          billInfo: {
            rule: "repeated",
            type: "BillInfo",
            id: 8
          },
          countDownEnd: {
            type: "string",
            id: 9
          },
          oldInfo: {
            type: "BillTotal",
            id: 10
          },
          oldBillInfo: {
            rule: "repeated",
            type: "BillInfo",
            id: 11
          },
          auto: {
            type: "int32",
            id: 12
          },
          gameResult: {
            type: "string",
            id: 13
          },
          completeBillCount: {
            type: "int32",
            id: 14
          },
          compareIndex: {
            type: "int32",
            id: 15
          },
          tableName: {
            type: "string",
            id: 16
          },
          tableType: {
            type: "int32",
            id: 17
          },
          gameType: {
            type: "int32",
            id: 18
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      QueryBillRequest: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          screenId: {
            type: "int32",
            id: 1
          },
          inningId: {
            type: "int32",
            id: 2
          },
          account: {
            type: "string",
            id: 3
          },
          pageIndex: {
            type: "int32",
            id: 4
          },
          pageSize: {
            type: "int32",
            id: 5
          },
          billType: {
            type: "int32",
            id: 6
          },
          compareType: {
            type: "int32",
            id: 7
          },
          startDate: {
            type: "string",
            id: 8
          },
          endDate: {
            type: "string",
            id: 9
          },
          compareNumber: {
            type: "int32",
            id: 10
          },
          gameType: {
            type: "int32",
            id: 11
          }
        }
      },
      QueryBillReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "BillInfo",
            id: 1
          },
          oldInfo: {
            rule: "repeated",
            type: "BillInfo",
            id: 2
          },
          billTotal: {
            type: "BillTotal",
            id: 3
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      AddPrintRequest: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          screenId: {
            type: "int32",
            id: 1
          },
          inningId: {
            type: "int32",
            id: 2
          },
          account: {
            type: "string",
            id: 3
          },
          date: {
            type: "string",
            id: 5
          }
        }
      },
      AddPrintReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1,
              PrinterIpError: 2,
              TableUnbinding: 3
            }
          }
        }
      },
      QueryReqBillRequest: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          screenId: {
            type: "int32",
            id: 1
          },
          inningId: {
            type: "int32",
            id: 2
          },
          account: {
            type: "string",
            id: 3
          },
          pageIndex: {
            type: "int32",
            id: 4
          },
          pageSize: {
            type: "int32",
            id: 5
          },
          billType: {
            type: "int32",
            id: 6
          },
          startDate: {
            type: "string",
            id: 7
          },
          endDate: {
            type: "string",
            id: 8
          },
          getNumber: {
            type: "int32",
            id: 9
          }
        }
      },
      QueryReqBillReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "BillInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      ReqSaveBillRequest: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          screenId: {
            type: "int32",
            id: 1
          },
          inningId: {
            type: "int32",
            id: 2
          },
          account: {
            type: "string",
            id: 3
          },
          pageIndex: {
            type: "int32",
            id: 4
          },
          pageSize: {
            type: "int32",
            id: 5
          },
          getNumber: {
            type: "int32",
            id: 9
          },
          gameId: {
            type: "string",
            id: 10
          }
        }
      },
      ReqSaveBillReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          getNumber: {
            type: "int32",
            id: 1
          },
          compareResult: {
            type: "int32",
            id: 2
          },
          info: {
            type: "BillTotal",
            id: 3
          },
          tableId: {
            type: "int32",
            id: 4
          },
          screenId: {
            type: "int32",
            id: 5
          },
          inningId: {
            type: "int32",
            id: 6
          },
          gameId: {
            type: "string",
            id: 7
          },
          billInfo: {
            rule: "repeated",
            type: "BillInfo",
            id: 8
          },
          countDownEnd: {
            type: "string",
            id: 9
          },
          auto: {
            type: "int32",
            id: 10
          },
          gameResult: {
            type: "string",
            id: 11
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      StopManualCompareRequest: {
        fields: {
          compareId: {
            type: "int32",
            id: 0
          }
        }
      },
      StopManualCompareReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          compareId: {
            type: "int32",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1,
              ErrorCompareId: 2
            }
          }
        }
      }
    }
  },
  game: {
    nested: {
      GameType: {
        values: {
          None: 0,
          BaiJiaLe: 1,
          LongHuDou: 2,
          NiuNiu: 3,
          TouBao: 4,
          LunPan: 5,
          Other: 6
        }
      },
      GameState: {
        values: {
          None: 0,
          CountDown: 1,
          NoMoreBet: 2,
          CancelGame: 3
        }
      },
      BetInfo: {
        fields: {
          type: {
            type: "int32",
            id: 0
          },
          num: {
            type: "int32",
            id: 1
          }
        }
      },
      GameInfo: {
        fields: {
          gameId: {
            type: "string",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          },
          leftCount: {
            type: "int32",
            id: 2
          },
          result: {
            type: "string",
            id: 3
          },
          countDown: {
            type: "int32",
            id: 4
          },
          billInfo: {
            rule: "repeated",
            type: "BillInfo",
            id: 5
          },
          state: {
            type: "int32",
            id: 6
          },
          pageIndex: {
            type: "int32",
            id: 7
          },
          pageSize: {
            type: "int32",
            id: 8
          },
          pointZ: {
            type: "int32",
            id: 9
          },
          pointX: {
            type: "int32",
            id: 10
          },
          pokerZ: {
            type: "string",
            id: 11
          },
          pokerX: {
            type: "string",
            id: 12
          },
          resultNN: {
            type: "string",
            id: 13
          },
          pokerNN: {
            type: "string",
            id: 14
          },
          dealIndex: {
            type: "int32",
            id: 15
          },
          allowBack: {
            type: "int32",
            id: 16
          },
          baijialePoolInfo: {
            type: "BaiJiaLePoolInfo",
            id: 17
          },
          baijialeMemberCoinInfo: {
            type: "BaiJiaLeMemberCoinInfo",
            id: 18
          },
          longhudouPoolInfo: {
            type: "LongHuDouPoolInfo",
            id: 19
          },
          longhudouMemberCoinInfo: {
            type: "LongHuDouMemberCoinInfo",
            id: 20
          },
          niuniuPoolInfo: {
            type: "NiuNiuPoolInfo",
            id: 21
          },
          niuniuMemberCoinInfo: {
            type: "NiuNiuMemberCoinInfo",
            id: 22
          },
          toubaoPoolInfo: {
            type: "TouBaoPoolInfo",
            id: 23
          },
          toubaoMemberCoinInfo: {
            type: "TouBaoMemberCoinInfo",
            id: 24
          },
          lunpanPoolInfo: {
            type: "LunPanPoolInfo",
            id: 25
          },
          lunpanMemberCoinInfo: {
            type: "LunPanMemberCoinInfo",
            id: 26
          }
        }
      },
      ChatInfo: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          content: {
            type: "string",
            id: 2
          },
          chatType: {
            type: "int32",
            id: 3
          },
          contentType: {
            type: "int32",
            id: 4
          },
          tableId: {
            type: "int32",
            id: 5
          },
          platType: {
            type: "PlatFormType",
            id: 6
          },
          time: {
            type: "string",
            id: 7
          }
        }
      },
      BetRequest: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          account: {
            type: "string",
            id: 1
          },
          betInfo: {
            rule: "repeated",
            type: "BetInfo",
            id: 2
          }
        }
      },
      BetReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          billId: {
            type: "string",
            id: 1
          },
          userInfo: {
            type: "UserGameInfo",
            id: 2
          },
          baijialePoolInfo: {
            type: "BaiJiaLePoolInfo",
            id: 3
          },
          longhudouPoolInfo: {
            type: "LongHuDouPoolInfo",
            id: 4
          },
          niuniuPoolInfo: {
            type: "NiuNiuPoolInfo",
            id: 5
          },
          toubaoPoolInfo: {
            type: "TouBaoPoolInfo",
            id: 6
          },
          lunpanPoolInfo: {
            type: "LunPanPoolInfo",
            id: 7
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              UserLimit: 2,
              TableLimit: 3,
              TableAllLimit: 4
            }
          }
        }
      },
      UnBetRequest: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          account: {
            type: "string",
            id: 1
          }
        }
      },
      UnBetReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          userInfo: {
            type: "UserGameInfo",
            id: 1
          },
          baijialePoolInfo: {
            type: "BaiJiaLePoolInfo",
            id: 2
          },
          longhudouPoolInfo: {
            type: "LongHuDouPoolInfo",
            id: 3
          },
          niuniuPoolInfo: {
            type: "NiuNiuPoolInfo",
            id: 4
          },
          toubaoPoolInfo: {
            type: "TouBaoPoolInfo",
            id: 5
          },
          lunpanPoolInfo: {
            type: "LunPanPoolInfo",
            id: 6
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      ChatRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          content: {
            type: "string",
            id: 2
          },
          chatType: {
            type: "int32",
            id: 3
          },
          contentType: {
            type: "int32",
            id: 4
          },
          tableId: {
            type: "int32",
            id: 5
          },
          platType: {
            type: "PlatFormType",
            id: 6
          }
        }
      },
      ChatReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          leftCount: {
            type: "int32",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              BeforeToInterval: 2,
              MoreThanWord: 3
            }
          }
        }
      },
      Ping: {
        fields: {
          time: {
            type: "string",
            id: 1
          }
        }
      },
      Pong: {
        fields: {
          time: {
            type: "string",
            id: 1
          }
        }
      },
      GetAllVersionRequest: {
        fields: {
          type: {
            type: "int32",
            id: 0
          }
        }
      },
      GetAllVersionReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          mobile: {
            type: "string",
            id: 1
          },
          game: {
            type: "string",
            id: 2
          },
          phone: {
            type: "string",
            id: 3
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetGameRequest: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          }
        }
      },
      GetGameReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          },
          gameInfo: {
            type: "GameInfo",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  player: {
    nested: {
      PlatFormType: {
        values: {
          PC: 0,
          Mobile: 1,
          H5: 2,
          Phone: 3
        }
      },
      UserStateType: {
        values: {
          normal: 1,
          disable: 2,
          pause: 3,
          toVoid: 4,
          lock: 5
        }
      },
      UserGameInfo: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          coin: {
            type: "int32",
            id: 1
          },
          billNum: {
            type: "int32",
            id: 2
          },
          winNum: {
            type: "int32",
            id: 3
          },
          propayCoin: {
            type: "int32",
            id: 4
          },
          baijialeMemberCoinInfo: {
            type: "BaiJiaLeMemberCoinInfo",
            id: 5
          },
          longhudouMemberCoinInfo: {
            type: "LongHuDouMemberCoinInfo",
            id: 6
          },
          niuniuMemberCoinInfo: {
            type: "NiuNiuMemberCoinInfo",
            id: 7
          },
          toubaoMemberCoinInfo: {
            type: "TouBaoMemberCoinInfo",
            id: 8
          },
          lunpanMemberCoinInfo: {
            type: "LunPanMemberCoinInfo",
            id: 9
          }
        }
      },
      PlayerInfo: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          state: {
            type: "UserStateType",
            id: 3
          },
          coin: {
            type: "int32",
            id: 4
          },
          drawRate: {
            type: "string",
            id: 5
          },
          washType: {
            type: "int32",
            id: 6
          },
          washRate: {
            type: "string",
            id: 7
          },
          stake: {
            type: "string",
            id: 8
          },
          remarks: {
            type: "string",
            id: 9
          },
          limit: {
            rule: "repeated",
            type: "limitProject",
            id: 10
          },
          parent: {
            type: "string",
            id: 11
          },
          unEnableTable: {
            rule: "repeated",
            type: "int32",
            id: 12
          },
          upDownCoin: {
            type: "int32",
            id: 13
          },
          agentType: {
            type: "int32",
            id: 14
          },
          innerGameType: {
            type: "int32",
            id: 15
          },
          propayCoin: {
            type: "int32",
            id: 16
          },
          openShot: {
            type: "int32",
            id: 17
          }
        }
      },
      UserChipsRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          platform: {
            type: "PlatFormType",
            id: 1
          }
        }
      },
      UserChipsReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          chipInfo: {
            rule: "repeated",
            type: "int32",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      ModifyChipsRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          platform: {
            type: "PlatFormType",
            id: 1
          },
          chipInfo: {
            rule: "repeated",
            type: "int32",
            id: 2
          }
        }
      },
      ModifyChipsReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          chipInfo: {
            rule: "repeated",
            type: "int32",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      ModifyPwdRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          oldPwd: {
            type: "string",
            id: 1
          },
          newPwd: {
            type: "string",
            id: 2
          },
          clientType: {
            type: "PlatFormType",
            id: 3
          }
        }
      },
      ModifyPwdReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      CreateRequest: {
        fields: {
          info: {
            type: "PlayerInfo",
            id: 0
          }
        }
      },
      CreateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateRequest: {
        fields: {
          info: {
            type: "PlayerInfo",
            id: 0
          }
        }
      },
      UpdateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetUserGameResultRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          },
          gameId: {
            type: "string",
            id: 2
          }
        }
      },
      GetUserGameResultReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          },
          coin: {
            type: "int32",
            id: 2
          },
          winNum: {
            type: "int32",
            id: 3
          },
          haveBet: {
            type: "int32",
            id: 4
          },
          propayCoin: {
            type: "int32",
            id: 5
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UserStatisticsRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          }
        }
      },
      UserStatisticsReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          winNum: {
            type: "string",
            id: 1
          },
          washFee: {
            type: "string",
            id: 2
          },
          drawFee: {
            type: "string",
            id: 3
          },
          washedFee: {
            type: "string",
            id: 4
          },
          unWashedFee: {
            type: "string",
            id: 5
          },
          drawedFee: {
            type: "string",
            id: 6
          },
          unDrawedFee: {
            type: "string",
            id: 7
          },
          washNum: {
            type: "string",
            id: 8
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UserExitTableRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          clientType: {
            type: "PlatFormType",
            id: 1
          }
        }
      },
      UserExitTableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetUserBaseInfoRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      GetUserBaseInfoReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          coin: {
            type: "int32",
            id: 1
          },
          userLimit: {
            rule: "repeated",
            type: "limitProject",
            id: 2
          },
          propayCoin: {
            type: "int32",
            id: 3
          },
          forbidden: {
            type: "int32",
            id: 4
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetCalculateCoinBySelfRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      GetCalculateCoinBySelfReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          coin: {
            type: "int32",
            id: 1
          },
          washNum: {
            type: "int32",
            id: 2
          },
          washTimeArr: {
            type: "string",
            id: 3
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              BatchWashing: 2,
              UserWashing: 3,
              NoWashNum: 4,
              NoWashTime: 5
            }
          }
        }
      },
      GetChatConfigRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      GetChatConfigReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          leftCount: {
            type: "int32",
            id: 1
          },
          word: {
            type: "int32",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetCompanyPayRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      GetCompanyPayReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "string",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UploadImageRequest: {
        fields: {
          imgData: {
            type: "string",
            id: 0
          },
          account: {
            type: "string",
            id: 1
          },
          tableName: {
            type: "string",
            id: 2
          },
          screenId: {
            type: "int32",
            id: 3
          },
          inningId: {
            type: "int32",
            id: 4
          },
          time: {
            type: "string",
            id: 5
          }
        }
      }
    }
  },
  odds: {
    nested: {
      OddsInfo: {
        fields: {
          id: {
            type: "int32",
            id: 0
          },
          type: {
            type: "int32",
            id: 1
          },
          oddsZ: {
            type: "string",
            id: 2
          },
          oddsX: {
            type: "string",
            id: 3
          },
          oddsH: {
            type: "string",
            id: 4
          },
          oddsZd: {
            type: "string",
            id: 5
          },
          oddsXd: {
            type: "string",
            id: 6
          },
          name: {
            type: "string",
            id: 7
          },
          innerType: {
            type: "int32",
            id: 8
          },
          oddsXWinN0: {
            type: "string",
            id: 9
          },
          oddsXWinN1: {
            type: "string",
            id: 10
          },
          oddsXWinN2: {
            type: "string",
            id: 11
          },
          oddsXWinN3: {
            type: "string",
            id: 12
          },
          oddsXWinN4: {
            type: "string",
            id: 13
          },
          oddsXWinN5: {
            type: "string",
            id: 14
          },
          oddsXWinN6: {
            type: "string",
            id: 15
          },
          oddsXWinN7: {
            type: "string",
            id: 16
          },
          oddsXWinN8: {
            type: "string",
            id: 17
          },
          oddsXWinN9: {
            type: "string",
            id: 18
          },
          oddsXWinNn: {
            type: "string",
            id: 19
          },
          oddsXWinNFive: {
            type: "string",
            id: 20
          },
          oddsXWinN0Double: {
            type: "string",
            id: 21
          },
          oddsXWinN1Double: {
            type: "string",
            id: 22
          },
          oddsXWinN2Double: {
            type: "string",
            id: 23
          },
          oddsXWinN3Double: {
            type: "string",
            id: 24
          },
          oddsXWinN4Double: {
            type: "string",
            id: 25
          },
          oddsXWinN5Double: {
            type: "string",
            id: 26
          },
          oddsXWinN6Double: {
            type: "string",
            id: 27
          },
          oddsXWinN7Double: {
            type: "string",
            id: 28
          },
          oddsXWinN8Double: {
            type: "string",
            id: 29
          },
          oddsXWinN9Double: {
            type: "string",
            id: 30
          },
          oddsXWinNnDouble: {
            type: "string",
            id: 31
          },
          oddsXWinNFiveDouble: {
            type: "string",
            id: 32
          },
          oddsXLoseN0: {
            type: "string",
            id: 33
          },
          oddsXLoseN1: {
            type: "string",
            id: 34
          },
          oddsXLoseN2: {
            type: "string",
            id: 35
          },
          oddsXLoseN3: {
            type: "string",
            id: 36
          },
          oddsXLoseN4: {
            type: "string",
            id: 37
          },
          oddsXLoseN5: {
            type: "string",
            id: 38
          },
          oddsXLoseN6: {
            type: "string",
            id: 39
          },
          oddsXLoseN7: {
            type: "string",
            id: 40
          },
          oddsXLoseN8: {
            type: "string",
            id: 41
          },
          oddsXLoseN9: {
            type: "string",
            id: 42
          },
          oddsXLoseNn: {
            type: "string",
            id: 43
          },
          oddsXLoseNFive: {
            type: "string",
            id: 44
          },
          oddsXLoseN0Double: {
            type: "string",
            id: 45
          },
          oddsXLoseN1Double: {
            type: "string",
            id: 46
          },
          oddsXLoseN2Double: {
            type: "string",
            id: 47
          },
          oddsXLoseN3Double: {
            type: "string",
            id: 48
          },
          oddsXLoseN4Double: {
            type: "string",
            id: 49
          },
          oddsXLoseN5Double: {
            type: "string",
            id: 50
          },
          oddsXLoseN6Double: {
            type: "string",
            id: 51
          },
          oddsXLoseN7Double: {
            type: "string",
            id: 52
          },
          oddsXLoseN8Double: {
            type: "string",
            id: 53
          },
          oddsXLoseN9Double: {
            type: "string",
            id: 54
          },
          oddsXLoseNnDouble: {
            type: "string",
            id: 55
          },
          oddsXLoseNFiveDouble: {
            type: "string",
            id: 56
          },
          longDan: {
            type: "string",
            id: 57
          },
          longShuang: {
            type: "string",
            id: 58
          },
          longHong: {
            type: "string",
            id: 59
          },
          longHei: {
            type: "string",
            id: 60
          },
          huDan: {
            type: "string",
            id: 61
          },
          huShuang: {
            type: "string",
            id: 62
          },
          huHong: {
            type: "string",
            id: 63
          },
          huHei: {
            type: "string",
            id: 64
          },
          renYiDui: {
            type: "string",
            id: 65
          },
          wanMeiDui: {
            type: "string",
            id: 66
          },
          da: {
            type: "string",
            id: 67
          },
          xiao: {
            type: "string",
            id: 68
          },
          longBaoLi: {
            type: "string",
            id: 69
          },
          longBao4: {
            type: "string",
            id: 70
          },
          longBao5: {
            type: "string",
            id: 71
          },
          longBao6: {
            type: "string",
            id: 72
          },
          longBao7: {
            type: "string",
            id: 73
          },
          longBao8: {
            type: "string",
            id: 74
          },
          longBao9: {
            type: "string",
            id: 75
          },
          daXiao: {
            type: "string",
            id: 76
          },
          danShuang: {
            type: "string",
            id: 77
          },
          weiTou: {
            type: "string",
            id: 78
          },
          quanWei: {
            type: "string",
            id: 79
          },
          danTou: {
            type: "string",
            id: 80
          },
          shuangTou: {
            type: "string",
            id: 81
          },
          quanTou: {
            type: "string",
            id: 82
          },
          duiZi: {
            type: "string",
            id: 83
          },
          paiJiu: {
            type: "string",
            id: 84
          },
          fourOrSevenTeen: {
            type: "string",
            id: 85
          },
          fiveOrSixteen: {
            type: "string",
            id: 86
          },
          sixOrFiveTeen: {
            type: "string",
            id: 87
          },
          sevenOrFourTeen: {
            type: "string",
            id: 88
          },
          eightOrThirteen: {
            type: "string",
            id: 89
          },
          nineToTwelve: {
            type: "string",
            id: 90
          },
          directBet: {
            type: "string",
            id: 91
          },
          partBet: {
            type: "string",
            id: 92
          },
          joinBet: {
            type: "string",
            id: 93
          },
          threeBet: {
            type: "string",
            id: 94
          },
          angleBet: {
            type: "string",
            id: 95
          },
          fourBet: {
            type: "string",
            id: 96
          },
          lineBet: {
            type: "string",
            id: 97
          },
          row123Bet: {
            type: "string",
            id: 98
          },
          hit123Bet: {
            type: "string",
            id: 99
          },
          redBlackBet: {
            type: "string",
            id: 100
          }
        }
      },
      AllOddsRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      AllOddsReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "OddsInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateOddsRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            rule: "repeated",
            type: "OddsInfo",
            id: 2
          }
        }
      },
      UpdateOddsReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  limit: {
    nested: {
      limitProject: {
        fields: {
          maxZ: {
            type: "int32",
            id: 0
          },
          minZ: {
            type: "int32",
            id: 1
          },
          maxX: {
            type: "int32",
            id: 2
          },
          minX: {
            type: "int32",
            id: 3
          },
          maxH: {
            type: "int32",
            id: 4
          },
          minH: {
            type: "int32",
            id: 5
          },
          maxZd: {
            type: "int32",
            id: 6
          },
          minZd: {
            type: "int32",
            id: 7
          },
          maxXd: {
            type: "int32",
            id: 8
          },
          minXd: {
            type: "int32",
            id: 9
          },
          name: {
            type: "string",
            id: 10
          },
          id: {
            type: "int32",
            id: 11
          },
          gameType: {
            type: "int32",
            id: 12
          },
          maxX1: {
            type: "int32",
            id: 13
          },
          maxX2: {
            type: "int32",
            id: 14
          },
          maxX3: {
            type: "int32",
            id: 15
          },
          minX1: {
            type: "int32",
            id: 16
          },
          minX2: {
            type: "int32",
            id: 17
          },
          minX3: {
            type: "int32",
            id: 18
          },
          maxX1Double: {
            type: "int32",
            id: 19
          },
          maxX2Double: {
            type: "int32",
            id: 20
          },
          maxX3Double: {
            type: "int32",
            id: 21
          },
          minX1Double: {
            type: "int32",
            id: 22
          },
          minX2Double: {
            type: "int32",
            id: 23
          },
          minX3Double: {
            type: "int32",
            id: 24
          },
          min: {
            type: "int32",
            id: 25
          },
          singleMax: {
            type: "int32",
            id: 26
          },
          doubleMax: {
            type: "int32",
            id: 27
          },
          heMax: {
            type: "int32",
            id: 28
          },
          bigSmallMax: {
            type: "int32",
            id: 29
          },
          normalDoubleMax: {
            type: "int32",
            id: 30
          },
          perfectDoubleMax: {
            type: "int32",
            id: 31
          },
          dragonJewel: {
            type: "int32",
            id: 32
          },
          superSix: {
            type: "int32",
            id: 33
          },
          daXiaoMax: {
            type: "int32",
            id: 34
          },
          danShuangMax: {
            type: "int32",
            id: 35
          },
          quanTouMax: {
            type: "int32",
            id: 36
          },
          weiTou1ToWeiTou6Max: {
            type: "int32",
            id: 37
          },
          zuHeMax: {
            type: "int32",
            id: 38
          },
          duiZi1ToDuiZi6Max: {
            type: "int32",
            id: 39
          },
          signal1ToSignal6Max: {
            type: "int32",
            id: 40
          },
          he9ToHe12Max: {
            type: "int32",
            id: 41
          },
          he8AndHe13Max: {
            type: "int32",
            id: 42
          },
          he7AndHe14Max: {
            type: "int32",
            id: 43
          },
          he6AndHe15Max: {
            type: "int32",
            id: 44
          },
          he5AndHe16Max: {
            type: "int32",
            id: 45
          },
          he4AndHe17Max: {
            type: "int32",
            id: 46
          },
          directBetMax: {
            type: "int32",
            id: 47
          },
          partBetMax: {
            type: "int32",
            id: 48
          },
          joinBetMax: {
            type: "int32",
            id: 49
          },
          threeBetMax: {
            type: "int32",
            id: 50
          },
          angleBetMax: {
            type: "int32",
            id: 51
          },
          fourBetMax: {
            type: "int32",
            id: 52
          },
          lineBetMax: {
            type: "int32",
            id: 53
          },
          row123BetMax: {
            type: "int32",
            id: 54
          },
          hit123BetMax: {
            type: "int32",
            id: 55
          }
        }
      },
      limitId: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          gameType: {
            type: "int32",
            id: 2
          }
        }
      },
      AllLimitRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      AllLimitReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "limitProject",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      AddLimitRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "limitProject",
            id: 2
          }
        }
      },
      AddLimitReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateLimitRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "limitProject",
            id: 2
          }
        }
      },
      UpdateLimitReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      DeleteLimitRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          id: {
            type: "int32",
            id: 1
          },
          projectName: {
            type: "string",
            id: 2
          }
        }
      },
      DeleteLimitReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateUserLimitRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          targetAccountArr: {
            rule: "repeated",
            type: "string",
            id: 2
          },
          userType: {
            type: "int32",
            id: 3
          },
          limitProjectIdArr: {
            rule: "repeated",
            type: "limitId",
            id: 4
          }
        }
      },
      UpdateUserLimitReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  subGame: {
    nested: {
      BaiJiaLeBetType: {
        values: {
          None: 0,
          Z: 1,
          X: 2,
          H: 3,
          ZD: 4,
          XD: 5
        }
      },
      BaiJiaLeExtraBetType: {
        values: {
          AnyDouble: 6,
          PerfectDouble: 7,
          ZLongBao: 8,
          XLongBao: 9,
          Big: 10,
          Small: 11,
          SuperSix: 12
        }
      },
      BaiJiaLeResultType: {
        values: {
          None: 0,
          Z: 10,
          ZZD: 11,
          ZXD: 12,
          ZZXD: 13,
          X: 20,
          XZD: 21,
          XXD: 22,
          XZXD: 23,
          H: 30,
          HZD: 31,
          HXD: 32,
          HZXD: 33
        }
      },
      ResultBigSmall: {
        values: {
          None: 0,
          Big: 1,
          Small: 2
        }
      },
      ResultAnyDouble: {
        values: {
          None: 0,
          AnyDouble: 1
        }
      },
      ResultPerfectDouble: {
        values: {
          None: 0,
          PerfectDouble: 1
        }
      },
      ResultLongBao: {
        values: {
          None: 0,
          ZLongBao: 1,
          XLongBao: 2
        }
      },
      ResultSuperSix: {
        values: {
          None: 0,
          SuperSix: 1
        }
      },
      BaiJiaLePoolInfo: {
        fields: {
          coinZ: {
            type: "int32",
            id: 0
          },
          coinX: {
            type: "int32",
            id: 1
          },
          coinH: {
            type: "int32",
            id: 2
          },
          coinZd: {
            type: "int32",
            id: 3
          },
          coinXd: {
            type: "int32",
            id: 4
          },
          coinBig: {
            type: "int32",
            id: 5
          },
          coinSmall: {
            type: "int32",
            id: 6
          },
          coinAnyDouble: {
            type: "int32",
            id: 7
          },
          coinPerfectDouble: {
            type: "int32",
            id: 8
          },
          coinZLongBao: {
            type: "int32",
            id: 9
          },
          coinXLongBao: {
            type: "int32",
            id: 10
          },
          coinSuperSix: {
            type: "int32",
            id: 11
          }
        }
      },
      BaiJiaLeMemberCoinInfo: {
        fields: {
          memberCoinZ: {
            type: "int32",
            id: 0
          },
          memberCoinX: {
            type: "int32",
            id: 1
          },
          memberCoinH: {
            type: "int32",
            id: 2
          },
          memberCoinZd: {
            type: "int32",
            id: 3
          },
          memberCoinXd: {
            type: "int32",
            id: 4
          },
          memberCoinBig: {
            type: "int32",
            id: 5
          },
          memberCoinSmall: {
            type: "int32",
            id: 6
          },
          memberCoinAnyDouble: {
            type: "int32",
            id: 7
          },
          memberCoinPerfectDouble: {
            type: "int32",
            id: 8
          },
          memberCoinZLongBao: {
            type: "int32",
            id: 9
          },
          memberCoinXLongBao: {
            type: "int32",
            id: 10
          },
          memberCoinSuperSix: {
            type: "int32",
            id: 11
          }
        }
      },
      LongHuDouBetType: {
        values: {
          None: 0,
          Z: 1,
          X: 2,
          H: 3
        }
      },
      LongHuDouExtraBetType: {
        values: {
          LongSingle: 4,
          LongDouble: 5,
          LongRed: 6,
          LongBlack: 7,
          HuSingle: 8,
          HuDouble: 9,
          HuRed: 10,
          HuBlack: 11
        }
      },
      LongHuDouResultType: {
        values: {
          None: 0,
          Z: 10,
          X: 20,
          H: 30
        }
      },
      ResultDanShuang: {
        values: {
          None: 0,
          Single: 1,
          Double: 2
        }
      },
      ResultHongHei: {
        values: {
          None: 0,
          Red: 1,
          Black: 2
        }
      },
      LongHuDouPoolInfo: {
        fields: {
          coinZ: {
            type: "int32",
            id: 0
          },
          coinX: {
            type: "int32",
            id: 1
          },
          coinH: {
            type: "int32",
            id: 2
          },
          coinLongSingle: {
            type: "int32",
            id: 3
          },
          coinLongDouble: {
            type: "int32",
            id: 4
          },
          coinLongRed: {
            type: "int32",
            id: 5
          },
          coinLongBlack: {
            type: "int32",
            id: 6
          },
          coinHuSingle: {
            type: "int32",
            id: 7
          },
          coinHuDouble: {
            type: "int32",
            id: 8
          },
          coinHuRed: {
            type: "int32",
            id: 9
          },
          coinHuBlack: {
            type: "int32",
            id: 10
          }
        }
      },
      LongHuDouMemberCoinInfo: {
        fields: {
          memberCoinZ: {
            type: "int32",
            id: 0
          },
          memberCoinX: {
            type: "int32",
            id: 1
          },
          memberCoinH: {
            type: "int32",
            id: 2
          },
          memberCoinLongSingle: {
            type: "int32",
            id: 3
          },
          memberCoinLongDouble: {
            type: "int32",
            id: 4
          },
          memberCoinLongRed: {
            type: "int32",
            id: 5
          },
          memberCoinLongBlack: {
            type: "int32",
            id: 6
          },
          memberCoinHuSingle: {
            type: "int32",
            id: 7
          },
          memberCoinHuDouble: {
            type: "int32",
            id: 8
          },
          memberCoinHuRed: {
            type: "int32",
            id: 9
          },
          memberCoinHuBlack: {
            type: "int32",
            id: 10
          }
        }
      },
      NiuNiuBetType: {
        values: {
          None: 0,
          Xian1Ping: 1,
          Xian1Fan: 2,
          Xian2Ping: 3,
          Xian2Fan: 4,
          Xian3Ping: 5,
          Xian3Fan: 6
        }
      },
      NiuNiuPoolInfo: {
        fields: {
          coinXian1Ping: {
            type: "int32",
            id: 0
          },
          coinXian1Fan: {
            type: "int32",
            id: 1
          },
          coinXian2Ping: {
            type: "int32",
            id: 2
          },
          coinXian2Fan: {
            type: "int32",
            id: 3
          },
          coinXian3Ping: {
            type: "int32",
            id: 4
          },
          coinXian3Fan: {
            type: "int32",
            id: 5
          }
        }
      },
      NiuNiuMemberCoinInfo: {
        fields: {
          memberCoinXian1Ping: {
            type: "int32",
            id: 0
          },
          memberCoinXian1Fan: {
            type: "int32",
            id: 1
          },
          memberCoinXian2Ping: {
            type: "int32",
            id: 2
          },
          memberCoinXian2Fan: {
            type: "int32",
            id: 3
          },
          memberCoinXian3Ping: {
            type: "int32",
            id: 4
          },
          memberCoinXian3Fan: {
            type: "int32",
            id: 5
          }
        }
      },
      TouBaoBetType: {
        values: {
          None: 0,
          DanTou1: 1,
          DanTou2: 2,
          DanTou3: 3,
          DanTou4: 4,
          DanTou5: 5,
          DanTou6: 6,
          PaiJiu56: 7,
          PaiJiu46: 8,
          PaiJiu45: 9,
          PaiJiu36: 10,
          PaiJiu35: 11,
          PaiJiu34: 12,
          PaiJiu26: 13,
          PaiJiu25: 14,
          PaiJiu24: 15,
          PaiJiu23: 16,
          PaiJiu16: 17,
          PaiJiu15: 18,
          PaiJiu14: 19,
          PaiJiu13: 20,
          PaiJiu12: 21,
          ZongHe4: 22,
          ZongHe5: 23,
          ZongHe6: 24,
          ZongHe7: 25,
          ZongHe8: 26,
          ZongHe9: 27,
          ZongHe10: 28,
          ZongHe11: 29,
          ZongHe12: 30,
          ZongHe13: 31,
          ZongHe14: 32,
          ZongHe15: 33,
          ZongHe16: 34,
          ZongHe17: 35,
          DuiZi1: 36,
          DuiZi2: 37,
          DuiZi3: 38,
          DuiZi4: 39,
          DuiZi5: 40,
          DuiZi6: 41,
          WeiTou1: 42,
          WeiTou2: 43,
          WeiTou3: 44,
          WeiTou4: 45,
          WeiTou5: 46,
          WeiTou6: 47,
          QuanWei: 48,
          TouDa: 49,
          TouXiao: 50,
          TouDan: 51,
          TouShuang: 52
        }
      },
      ResultTouBaoDaXiao: {
        values: {
          None: 0,
          Da: 1,
          Xiao: 2
        }
      },
      ResultTouBaoDanShuang: {
        values: {
          None: 0,
          Dan: 1,
          Shuang: 2
        }
      },
      ResultTouBaoQuanWei: {
        values: {
          None: 0,
          Wei1: 1,
          Wei2: 2,
          Wei3: 3,
          Wei4: 4,
          Wei5: 5,
          Wei6: 6
        }
      },
      TouBaoPoolInfo: {
        fields: {
          coinTouDan: {
            type: "int32",
            id: 0
          },
          coinTouShuang: {
            type: "int32",
            id: 1
          },
          coinTouDa: {
            type: "int32",
            id: 2
          },
          coinTouXiao: {
            type: "int32",
            id: 3
          },
          coinDanDian: {
            type: "int32",
            id: 4
          },
          coinDuiZi: {
            type: "int32",
            id: 5
          },
          coinPaiJiu: {
            type: "int32",
            id: 6
          },
          coinQuanWei: {
            type: "int32",
            id: 7
          },
          coinWeiTou: {
            type: "int32",
            id: 8
          },
          coinZongHe: {
            type: "int32",
            id: 9
          }
        }
      },
      TouBaoMemberCoinInfo: {
        fields: {
          memberCoinDanTou1: {
            type: "int32",
            id: 0
          },
          memberCoinDanTou2: {
            type: "int32",
            id: 1
          },
          memberCoinDanTou3: {
            type: "int32",
            id: 2
          },
          memberCoinDanTou4: {
            type: "int32",
            id: 3
          },
          memberCoinDanTou5: {
            type: "int32",
            id: 4
          },
          memberCoinDanTou6: {
            type: "int32",
            id: 5
          },
          memberCoinPaiJiu56: {
            type: "int32",
            id: 6
          },
          memberCoinPaiJiu46: {
            type: "int32",
            id: 7
          },
          memberCoinPaiJiu45: {
            type: "int32",
            id: 8
          },
          memberCoinPaiJiu36: {
            type: "int32",
            id: 9
          },
          memberCoinPaiJiu35: {
            type: "int32",
            id: 10
          },
          memberCoinPaiJiu34: {
            type: "int32",
            id: 11
          },
          memberCoinPaiJiu26: {
            type: "int32",
            id: 12
          },
          memberCoinPaiJiu25: {
            type: "int32",
            id: 13
          },
          memberCoinPaiJiu24: {
            type: "int32",
            id: 14
          },
          memberCoinPaiJiu23: {
            type: "int32",
            id: 15
          },
          memberCoinPaiJiu16: {
            type: "int32",
            id: 16
          },
          memberCoinPaiJiu15: {
            type: "int32",
            id: 17
          },
          memberCoinPaiJiu14: {
            type: "int32",
            id: 18
          },
          memberCoinPaiJiu13: {
            type: "int32",
            id: 19
          },
          memberCoinPaiJiu12: {
            type: "int32",
            id: 20
          },
          memberCoinZongHe17: {
            type: "int32",
            id: 21
          },
          memberCoinZongHe16: {
            type: "int32",
            id: 22
          },
          memberCoinZongHe15: {
            type: "int32",
            id: 23
          },
          memberCoinZongHe14: {
            type: "int32",
            id: 24
          },
          memberCoinZongHe13: {
            type: "int32",
            id: 25
          },
          memberCoinZongHe12: {
            type: "int32",
            id: 26
          },
          memberCoinZongHe11: {
            type: "int32",
            id: 27
          },
          memberCoinZongHe10: {
            type: "int32",
            id: 28
          },
          memberCoinZongHe9: {
            type: "int32",
            id: 29
          },
          memberCoinZongHe8: {
            type: "int32",
            id: 30
          },
          memberCoinZongHe7: {
            type: "int32",
            id: 31
          },
          memberCoinZongHe6: {
            type: "int32",
            id: 32
          },
          memberCoinZongHe5: {
            type: "int32",
            id: 33
          },
          memberCoinZongHe4: {
            type: "int32",
            id: 34
          },
          memberCoinDuiZi6: {
            type: "int32",
            id: 35
          },
          memberCoinDuiZi5: {
            type: "int32",
            id: 36
          },
          memberCoinDuiZi4: {
            type: "int32",
            id: 37
          },
          memberCoinDuiZi3: {
            type: "int32",
            id: 38
          },
          memberCoinDuiZi2: {
            type: "int32",
            id: 39
          },
          memberCoinDuiZi1: {
            type: "int32",
            id: 40
          },
          memberCoinWeiTou6: {
            type: "int32",
            id: 41
          },
          memberCoinWeiTou5: {
            type: "int32",
            id: 42
          },
          memberCoinWeiTou4: {
            type: "int32",
            id: 43
          },
          memberCoinWeiTou3: {
            type: "int32",
            id: 44
          },
          memberCoinWeiTou2: {
            type: "int32",
            id: 45
          },
          memberCoinWeiTou1: {
            type: "int32",
            id: 46
          },
          memberCoinQuanWei: {
            type: "int32",
            id: 47
          },
          memberCoinTouDa: {
            type: "int32",
            id: 48
          },
          memberCoinTouXiao: {
            type: "int32",
            id: 49
          },
          memberCoinTouDan: {
            type: "int32",
            id: 50
          },
          memberCoinTouShuang: {
            type: "int32",
            id: 51
          }
        }
      },
      LunPanBetType: {
        values: {
          None: 0,
          Zhi0: 1,
          Zhi1: 2,
          Zhi2: 3,
          Zhi3: 4,
          Zhi4: 5,
          Zhi5: 6,
          Zhi6: 7,
          Zhi7: 8,
          Zhi8: 9,
          Zhi9: 10,
          Zhi10: 11,
          Zhi11: 12,
          Zhi12: 13,
          Zhi13: 14,
          Zhi14: 15,
          Zhi15: 16,
          Zhi16: 17,
          Zhi17: 18,
          Zhi18: 19,
          Zhi19: 20,
          Zhi20: 21,
          Zhi21: 22,
          Zhi22: 23,
          Zhi23: 24,
          Zhi24: 25,
          Zhi25: 26,
          Zhi26: 27,
          Zhi27: 28,
          Zhi28: 29,
          Zhi29: 30,
          Zhi30: 31,
          Zhi31: 32,
          Zhi32: 33,
          Zhi33: 34,
          Zhi34: 35,
          Zhi35: 36,
          Zhi36: 37,
          Fen1: 38,
          Fen2: 39,
          Fen3: 40,
          Fen4: 41,
          Fen5: 42,
          Fen6: 43,
          Fen7: 44,
          Fen8: 45,
          Fen9: 46,
          Fen10: 47,
          Fen11: 48,
          Fen12: 49,
          Fen13: 50,
          Fen14: 51,
          Fen15: 52,
          Fen16: 53,
          Fen17: 54,
          Fen18: 55,
          Fen19: 56,
          Fen20: 57,
          Fen21: 58,
          Fen22: 59,
          Fen23: 60,
          Fen24: 61,
          Fen25: 62,
          Fen26: 63,
          Fen27: 64,
          Fen28: 65,
          Fen29: 66,
          Fen30: 67,
          Fen31: 68,
          Fen32: 69,
          Fen33: 70,
          Fen34: 71,
          Fen35: 72,
          Fen36: 73,
          Fen37: 74,
          Fen38: 75,
          Fen39: 76,
          Fen40: 77,
          Fen41: 78,
          Fen42: 79,
          Fen43: 80,
          Fen44: 81,
          Fen45: 82,
          Fen46: 83,
          Fen47: 84,
          Fen48: 85,
          Fen49: 86,
          Fen50: 87,
          Fen51: 88,
          Fen52: 89,
          Fen53: 90,
          Fen54: 91,
          Fen55: 92,
          Fen56: 93,
          Fen57: 94,
          Fen58: 95,
          Fen59: 96,
          Fen60: 97,
          SanShu1: 98,
          SanShu2: 99,
          SiShu: 100,
          JieZhu1: 101,
          JieZhu2: 102,
          JieZhu3: 103,
          JieZhu4: 104,
          JieZhu5: 105,
          JieZhu6: 106,
          JieZhu7: 107,
          JieZhu8: 108,
          JieZhu9: 109,
          JieZhu10: 110,
          JieZhu11: 111,
          JieZhu12: 112,
          XianZhu1: 113,
          XianZhu2: 114,
          XianZhu3: 115,
          XianZhu4: 116,
          XianZhu5: 117,
          XianZhu6: 118,
          XianZhu7: 119,
          XianZhu8: 120,
          XianZhu9: 121,
          XianZhu10: 122,
          XianZhu11: 123,
          JiaoZhu1: 124,
          JiaoZhu2: 125,
          JiaoZhu3: 126,
          JiaoZhu4: 127,
          JiaoZhu5: 128,
          JiaoZhu6: 129,
          JiaoZhu7: 130,
          JiaoZhu8: 131,
          JiaoZhu9: 132,
          JiaoZhu10: 133,
          JiaoZhu11: 134,
          JiaoZhu12: 135,
          JiaoZhu13: 136,
          JiaoZhu14: 137,
          JiaoZhu15: 138,
          JiaoZhu16: 139,
          JiaoZhu17: 140,
          JiaoZhu18: 141,
          JiaoZhu19: 142,
          JiaoZhu20: 143,
          JiaoZhu21: 144,
          JiaoZhu22: 145,
          Da1: 146,
          Da2: 147,
          Da3: 148,
          Lie1: 149,
          Lie2: 150,
          Lie3: 151,
          Da: 152,
          Xiao: 153,
          Dan: 154,
          Shuang: 155,
          Hong: 156,
          Hei: 157
        }
      },
      ResultLunPanDaXiao: {
        values: {
          None: 0,
          Da: 1,
          Xiao: 2
        }
      },
      ResultLunPanDanShuang: {
        values: {
          None: 0,
          Dan: 1,
          Shuang: 2
        }
      },
      ResultLunPanHongHei: {
        values: {
          None: 0,
          Hong: 1,
          Hei: 2
        }
      },
      ResultLunPanDa: {
        values: {
          None: 0,
          Da1: 1,
          Da2: 2,
          Da3: 3
        }
      },
      ResultLunPanLie: {
        values: {
          None: 0,
          Lie1: 1,
          Lie2: 2,
          Lie3: 3
        }
      },
      LunPanPoolInfo: {
        fields: {
          coinDan: {
            type: "int32",
            id: 0
          },
          coinShuang: {
            type: "int32",
            id: 1
          },
          coinDa: {
            type: "int32",
            id: 2
          },
          coinXiao: {
            type: "int32",
            id: 3
          },
          coinHong: {
            type: "int32",
            id: 4
          },
          coinHei: {
            type: "int32",
            id: 5
          },
          coinZero: {
            type: "int32",
            id: 6
          },
          coinZhiJie: {
            type: "int32",
            id: 7
          },
          coinFenZhu: {
            type: "int32",
            id: 8
          },
          coinJieZhu: {
            type: "int32",
            id: 9
          },
          coinSanShu: {
            type: "int32",
            id: 10
          },
          coinJiaoZhu: {
            type: "int32",
            id: 11
          },
          coinSiShu: {
            type: "int32",
            id: 12
          },
          coinLine: {
            type: "int32",
            id: 13
          },
          coinLie123: {
            type: "int32",
            id: 14
          },
          coinDa123: {
            type: "int32",
            id: 15
          },
          coinHongHei: {
            type: "int32",
            id: 16
          },
          coinDanShuang: {
            type: "int32",
            id: 17
          },
          coinDaXiao: {
            type: "int32",
            id: 18
          }
        }
      },
      LunPanMemberCoinInfo: {
        fields: {
          memberCoinZhi0: {
            type: "int32",
            id: 1
          },
          memberCoinZhi1: {
            type: "int32",
            id: 2
          },
          memberCoinZhi2: {
            type: "int32",
            id: 3
          },
          memberCoinZhi3: {
            type: "int32",
            id: 4
          },
          memberCoinZhi4: {
            type: "int32",
            id: 5
          },
          memberCoinZhi5: {
            type: "int32",
            id: 6
          },
          memberCoinZhi6: {
            type: "int32",
            id: 7
          },
          memberCoinZhi7: {
            type: "int32",
            id: 8
          },
          memberCoinZhi8: {
            type: "int32",
            id: 9
          },
          memberCoinZhi9: {
            type: "int32",
            id: 10
          },
          memberCoinZhi10: {
            type: "int32",
            id: 11
          },
          memberCoinZhi11: {
            type: "int32",
            id: 12
          },
          memberCoinZhi12: {
            type: "int32",
            id: 13
          },
          memberCoinZhi13: {
            type: "int32",
            id: 14
          },
          memberCoinZhi14: {
            type: "int32",
            id: 15
          },
          memberCoinZhi15: {
            type: "int32",
            id: 16
          },
          memberCoinZhi16: {
            type: "int32",
            id: 17
          },
          memberCoinZhi17: {
            type: "int32",
            id: 18
          },
          memberCoinZhi18: {
            type: "int32",
            id: 19
          },
          memberCoinZhi19: {
            type: "int32",
            id: 20
          },
          memberCoinZhi20: {
            type: "int32",
            id: 21
          },
          memberCoinZhi21: {
            type: "int32",
            id: 22
          },
          memberCoinZhi22: {
            type: "int32",
            id: 23
          },
          memberCoinZhi23: {
            type: "int32",
            id: 24
          },
          memberCoinZhi24: {
            type: "int32",
            id: 25
          },
          memberCoinZhi25: {
            type: "int32",
            id: 26
          },
          memberCoinZhi26: {
            type: "int32",
            id: 27
          },
          memberCoinZhi27: {
            type: "int32",
            id: 28
          },
          memberCoinZhi28: {
            type: "int32",
            id: 29
          },
          memberCoinZhi29: {
            type: "int32",
            id: 30
          },
          memberCoinZhi30: {
            type: "int32",
            id: 31
          },
          memberCoinZhi31: {
            type: "int32",
            id: 32
          },
          memberCoinZhi32: {
            type: "int32",
            id: 33
          },
          memberCoinZhi33: {
            type: "int32",
            id: 34
          },
          memberCoinZhi34: {
            type: "int32",
            id: 35
          },
          memberCoinZhi35: {
            type: "int32",
            id: 36
          },
          memberCoinZhi36: {
            type: "int32",
            id: 37
          },
          memberCoinFen1: {
            type: "int32",
            id: 38
          },
          memberCoinFen2: {
            type: "int32",
            id: 39
          },
          memberCoinFen3: {
            type: "int32",
            id: 40
          },
          memberCoinFen4: {
            type: "int32",
            id: 41
          },
          memberCoinFen5: {
            type: "int32",
            id: 42
          },
          memberCoinFen6: {
            type: "int32",
            id: 43
          },
          memberCoinFen7: {
            type: "int32",
            id: 44
          },
          memberCoinFen8: {
            type: "int32",
            id: 45
          },
          memberCoinFen9: {
            type: "int32",
            id: 46
          },
          memberCoinFen10: {
            type: "int32",
            id: 47
          },
          memberCoinFen11: {
            type: "int32",
            id: 48
          },
          memberCoinFen12: {
            type: "int32",
            id: 49
          },
          memberCoinFen13: {
            type: "int32",
            id: 50
          },
          memberCoinFen14: {
            type: "int32",
            id: 51
          },
          memberCoinFen15: {
            type: "int32",
            id: 52
          },
          memberCoinFen16: {
            type: "int32",
            id: 53
          },
          memberCoinFen17: {
            type: "int32",
            id: 54
          },
          memberCoinFen18: {
            type: "int32",
            id: 55
          },
          memberCoinFen19: {
            type: "int32",
            id: 56
          },
          memberCoinFen20: {
            type: "int32",
            id: 57
          },
          memberCoinFen21: {
            type: "int32",
            id: 58
          },
          memberCoinFen22: {
            type: "int32",
            id: 59
          },
          memberCoinFen23: {
            type: "int32",
            id: 60
          },
          memberCoinFen24: {
            type: "int32",
            id: 61
          },
          memberCoinFen25: {
            type: "int32",
            id: 62
          },
          memberCoinFen26: {
            type: "int32",
            id: 63
          },
          memberCoinFen27: {
            type: "int32",
            id: 64
          },
          memberCoinFen28: {
            type: "int32",
            id: 65
          },
          memberCoinFen29: {
            type: "int32",
            id: 66
          },
          memberCoinFen30: {
            type: "int32",
            id: 67
          },
          memberCoinFen31: {
            type: "int32",
            id: 68
          },
          memberCoinFen32: {
            type: "int32",
            id: 69
          },
          memberCoinFen33: {
            type: "int32",
            id: 70
          },
          memberCoinFen34: {
            type: "int32",
            id: 71
          },
          memberCoinFen35: {
            type: "int32",
            id: 72
          },
          memberCoinFen36: {
            type: "int32",
            id: 73
          },
          memberCoinFen37: {
            type: "int32",
            id: 74
          },
          memberCoinFen38: {
            type: "int32",
            id: 75
          },
          memberCoinFen39: {
            type: "int32",
            id: 76
          },
          memberCoinFen40: {
            type: "int32",
            id: 77
          },
          memberCoinFen41: {
            type: "int32",
            id: 78
          },
          memberCoinFen42: {
            type: "int32",
            id: 79
          },
          memberCoinFen43: {
            type: "int32",
            id: 80
          },
          memberCoinFen44: {
            type: "int32",
            id: 81
          },
          memberCoinFen45: {
            type: "int32",
            id: 82
          },
          memberCoinFen46: {
            type: "int32",
            id: 83
          },
          memberCoinFen47: {
            type: "int32",
            id: 84
          },
          memberCoinFen48: {
            type: "int32",
            id: 85
          },
          memberCoinFen49: {
            type: "int32",
            id: 86
          },
          memberCoinFen50: {
            type: "int32",
            id: 87
          },
          memberCoinFen51: {
            type: "int32",
            id: 88
          },
          memberCoinFen52: {
            type: "int32",
            id: 89
          },
          memberCoinFen53: {
            type: "int32",
            id: 90
          },
          memberCoinFen54: {
            type: "int32",
            id: 91
          },
          memberCoinFen55: {
            type: "int32",
            id: 92
          },
          memberCoinFen56: {
            type: "int32",
            id: 93
          },
          memberCoinFen57: {
            type: "int32",
            id: 94
          },
          memberCoinFen58: {
            type: "int32",
            id: 95
          },
          memberCoinFen59: {
            type: "int32",
            id: 96
          },
          memberCoinFen60: {
            type: "int32",
            id: 97
          },
          memberCoinSanShu1: {
            type: "int32",
            id: 98
          },
          memberCoinSanShu2: {
            type: "int32",
            id: 99
          },
          memberCoinSiShu: {
            type: "int32",
            id: 100
          },
          memberCoinJieZhu1: {
            type: "int32",
            id: 101
          },
          memberCoinJieZhu2: {
            type: "int32",
            id: 102
          },
          memberCoinJieZhu3: {
            type: "int32",
            id: 103
          },
          memberCoinJieZhu4: {
            type: "int32",
            id: 104
          },
          memberCoinJieZhu5: {
            type: "int32",
            id: 105
          },
          memberCoinJieZhu6: {
            type: "int32",
            id: 106
          },
          memberCoinJieZhu7: {
            type: "int32",
            id: 107
          },
          memberCoinJieZhu8: {
            type: "int32",
            id: 108
          },
          memberCoinJieZhu9: {
            type: "int32",
            id: 109
          },
          memberCoinJieZhu10: {
            type: "int32",
            id: 110
          },
          memberCoinJieZhu11: {
            type: "int32",
            id: 111
          },
          memberCoinJieZhu12: {
            type: "int32",
            id: 112
          },
          memberCoinXianZhu1: {
            type: "int32",
            id: 113
          },
          memberCoinXianZhu2: {
            type: "int32",
            id: 114
          },
          memberCoinXianZhu3: {
            type: "int32",
            id: 115
          },
          memberCoinXianZhu4: {
            type: "int32",
            id: 116
          },
          memberCoinXianZhu5: {
            type: "int32",
            id: 117
          },
          memberCoinXianZhu6: {
            type: "int32",
            id: 118
          },
          memberCoinXianZhu7: {
            type: "int32",
            id: 119
          },
          memberCoinXianZhu8: {
            type: "int32",
            id: 120
          },
          memberCoinXianZhu9: {
            type: "int32",
            id: 121
          },
          memberCoinXianZhu10: {
            type: "int32",
            id: 122
          },
          memberCoinXianZhu11: {
            type: "int32",
            id: 123
          },
          memberCoinJiaoZhu1: {
            type: "int32",
            id: 124
          },
          memberCoinJiaoZhu2: {
            type: "int32",
            id: 125
          },
          memberCoinJiaoZhu3: {
            type: "int32",
            id: 126
          },
          memberCoinJiaoZhu4: {
            type: "int32",
            id: 127
          },
          memberCoinJiaoZhu5: {
            type: "int32",
            id: 128
          },
          memberCoinJiaoZhu6: {
            type: "int32",
            id: 129
          },
          memberCoinJiaoZhu7: {
            type: "int32",
            id: 130
          },
          memberCoinJiaoZhu8: {
            type: "int32",
            id: 131
          },
          memberCoinJiaoZhu9: {
            type: "int32",
            id: 132
          },
          memberCoinJiaoZhu10: {
            type: "int32",
            id: 133
          },
          memberCoinJiaoZhu11: {
            type: "int32",
            id: 134
          },
          memberCoinJiaoZhu12: {
            type: "int32",
            id: 135
          },
          memberCoinJiaoZhu13: {
            type: "int32",
            id: 136
          },
          memberCoinJiaoZhu14: {
            type: "int32",
            id: 137
          },
          memberCoinJiaoZhu15: {
            type: "int32",
            id: 138
          },
          memberCoinJiaoZhu16: {
            type: "int32",
            id: 139
          },
          memberCoinJiaoZhu17: {
            type: "int32",
            id: 140
          },
          memberCoinJiaoZhu18: {
            type: "int32",
            id: 141
          },
          memberCoinJiaoZhu19: {
            type: "int32",
            id: 142
          },
          memberCoinJiaoZhu20: {
            type: "int32",
            id: 143
          },
          memberCoinJiaoZhu21: {
            type: "int32",
            id: 144
          },
          memberCoinJiaoZhu22: {
            type: "int32",
            id: 145
          },
          memberCoinDa1: {
            type: "int32",
            id: 146
          },
          memberCoinDa2: {
            type: "int32",
            id: 147
          },
          memberCoinDa3: {
            type: "int32",
            id: 148
          },
          memberCoinLie1: {
            type: "int32",
            id: 149
          },
          memberCoinLie2: {
            type: "int32",
            id: 150
          },
          memberCoinLie3: {
            type: "int32",
            id: 151
          },
          memberCoinDa: {
            type: "int32",
            id: 152
          },
          memberCoinXiao: {
            type: "int32",
            id: 153
          },
          memberCoinDan: {
            type: "int32",
            id: 154
          },
          memberCoinShuang: {
            type: "int32",
            id: 155
          },
          memberCoinHong: {
            type: "int32",
            id: 156
          },
          memberCoinHei: {
            type: "int32",
            id: 157
          }
        }
      }
    }
  },
  bill: {
    nested: {
      BillInfo: {
        fields: {
          tableName: {
            type: "string",
            id: 0
          },
          screenId: {
            type: "int32",
            id: 1
          },
          inningId: {
            type: "int32",
            id: 2
          },
          betTime: {
            type: "string",
            id: 3
          },
          resultTime: {
            type: "string",
            id: 4
          },
          gameType: {
            type: "GameType",
            id: 5
          },
          winNum: {
            type: "string",
            id: 6
          },
          coinE: {
            type: "string",
            id: 7
          },
          numZ: {
            type: "int32",
            id: 8
          },
          numX: {
            type: "int32",
            id: 9
          },
          numH: {
            type: "int32",
            id: 10
          },
          numZd: {
            type: "int32",
            id: 11
          },
          numXd: {
            type: "int32",
            id: 12
          },
          billNum: {
            type: "int32",
            id: 13
          },
          result: {
            type: "string",
            id: 14
          },
          drawNum: {
            type: "int32",
            id: 15
          },
          drawRate: {
            type: "string",
            id: 16
          },
          drawFee: {
            type: "string",
            id: 17
          },
          washNum: {
            type: "int32",
            id: 18
          },
          washRate: {
            type: "string",
            id: 19
          },
          washFee: {
            type: "string",
            id: 20
          },
          ip: {
            type: "string",
            id: 21
          },
          address: {
            type: "string",
            id: 22
          },
          coinB: {
            type: "string",
            id: 23
          },
          washType: {
            type: "int32",
            id: 24
          },
          tableId: {
            type: "int32",
            id: 25
          },
          billId: {
            type: "string",
            id: 26
          },
          account: {
            type: "string",
            id: 27
          },
          userName: {
            type: "string",
            id: 28
          },
          state: {
            type: "int32",
            id: 29
          },
          leftCoin: {
            type: "string",
            id: 30
          },
          surplusCoin: {
            type: "int32",
            id: 31
          },
          typeStr: {
            type: "string",
            id: 32
          },
          updateAt: {
            type: "string",
            id: 33
          },
          gameId: {
            type: "string",
            id: 34
          },
          washedFee: {
            type: "string",
            id: 35
          },
          unWashedFee: {
            type: "string",
            id: 36
          },
          drawedFee: {
            type: "string",
            id: 37
          },
          unDrawedFee: {
            type: "string",
            id: 38
          },
          dividend: {
            type: "int32",
            id: 39
          },
          tableIndex: {
            type: "int32",
            id: 40
          },
          propayCoin: {
            type: "string",
            id: 41
          },
          num1: {
            type: "int32",
            id: 42
          },
          num2: {
            type: "int32",
            id: 43
          },
          num3: {
            type: "int32",
            id: 44
          },
          num4: {
            type: "int32",
            id: 45
          },
          num5: {
            type: "int32",
            id: 46
          },
          num6: {
            type: "int32",
            id: 47
          },
          num7: {
            type: "int32",
            id: 48
          },
          num8: {
            type: "int32",
            id: 49
          },
          isCommission: {
            type: "int32",
            id: 50
          },
          betType: {
            type: "int32",
            id: 51
          },
          betNum: {
            type: "int32",
            id: 52
          }
        }
      },
      RecordType: {
        values: {
          All: 0,
          Normal: 1,
          Invalid: 2
        }
      },
      QueryBillRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          },
          type: {
            type: "RecordType",
            id: 3
          },
          gameType: {
            type: "GameType",
            id: 4
          },
          pageIndex: {
            type: "int32",
            id: 5
          },
          pageSize: {
            type: "int32",
            id: 6
          },
          sortKey: {
            type: "string",
            id: 7
          },
          sortType: {
            type: "int32",
            id: 8
          }
        }
      },
      QueryBillReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          type: {
            type: "RecordType",
            id: 1
          },
          info: {
            rule: "repeated",
            type: "BillInfo",
            id: 2
          },
          pageIndex: {
            type: "int32",
            id: 3
          },
          pageSize: {
            type: "int32",
            id: 4
          },
          billCount: {
            type: "int32",
            id: 5
          },
          winNumTotal: {
            type: "int32",
            id: 6
          },
          washFeeTotal: {
            type: "string",
            id: 7
          },
          drawFeeTotal: {
            type: "string",
            id: 8
          },
          washedFeeTotal: {
            type: "string",
            id: 10
          },
          unWashedFeeTotal: {
            type: "string",
            id: 11
          },
          drawedFeeTotal: {
            type: "string",
            id: 12
          },
          unDrawedFeeTotal: {
            type: "string",
            id: 13
          },
          gameNum: {
            type: "int32",
            id: 14
          },
          startDate: {
            type: "string",
            id: 15
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      QueryBillByGameRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          date: {
            type: "string",
            id: 1
          },
          type: {
            type: "RecordType",
            id: 2
          },
          gameId: {
            type: "string",
            id: 3
          },
          pageIndex: {
            type: "int32",
            id: 4
          },
          pageSize: {
            type: "int32",
            id: 5
          }
        }
      },
      QueryBillByGameReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          type: {
            type: "RecordType",
            id: 1
          },
          info: {
            rule: "repeated",
            type: "BillInfo",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  log: {
    nested: {
      OptionType: {
        values: {
          None: 0,
          State: 1,
          Password: 2,
          Limit: 3,
          Result: 4,
          Kick: 5
        }
      },
      ControlType: {
        values: {
          None: 0,
          ChangePassWord: 1,
          DistributionLimit: 2,
          DistributionTable: 3,
          ChangeName: 4,
          ChangeStake: 5,
          ChangeWashRate: 6,
          ChangeDrawRate: 7,
          KickUser: 8,
          PauseUser: 9,
          LockUser: 10,
          ClearCoin: 11,
          ClearCoinAndVoid: 12,
          UnEnable: 13,
          Enable: 14,
          AddCoin: 15,
          SubCoin: 16,
          ChangeResult: 17,
          VoidResult: 18,
          CreateUser: 19,
          CreateNotice: 20,
          EditNotice: 21,
          SingleDelete: 22,
          SingleCreate: 23,
          GroupDelete: 24,
          CroupCreate: 25,
          DistributionTableForPhoneUser: 26,
          CreateLimit: 27,
          EditLimit: 28,
          DeleteLog: 29,
          BlackIP: 30,
          CreateTable: 31,
          EditTable: 32,
          SetOdds: 33,
          DataSave: 34,
          CalculateCoinByOneKey: 35,
          EditAgent: 36,
          EditAdmin: 37,
          ChangeWashVisible: 38,
          ChangeWashType: 39,
          EditMember: 40,
          ChangeAdminPermission: 41,
          CreateSubAccount: 42,
          ChangeSubAccount: 43,
          CalculateCoinBySelf: 44,
          ChangeInnerGameType: 45,
          ChangeInStake: 46,
          DistributionTableForGameUser: 47,
          CalculateCoinByBatch: 48,
          WithDrawalsRequestCheck: 49,
          Recharge: 50,
          WithDrawals: 51,
          RechargeConfig: 52,
          CreateChannel: 53,
          CreatePayMethod: 54,
          UpdateChannel: 55,
          UpdatePayMethod: 56,
          UpdatePayOrder: 57,
          SetForbidden: 58,
          VoidForbidden: 59,
          AllowTableBack: 60,
          RechargeRequestCheck: 61,
          ChangeAgentType: 62,
          ChangeConfig: 63,
          ChangeWashButtonVisiable: 64,
          ChangeUserAgentType: 65,
          ResetAgentValidCoin: 66,
          ChangeMemberOpenShot: 67,
          ErrorLogin: 68,
          ChangePhone: 69
        }
      },
      CoinLog: {
        fields: {
          id: {
            type: "int32",
            id: 0
          },
          account: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          type: {
            type: "int32",
            id: 3
          },
          coin: {
            type: "string",
            id: 4
          },
          userType: {
            type: "int32",
            id: 5
          },
          targetAccount: {
            type: "string",
            id: 6
          },
          targetName: {
            type: "string",
            id: 7
          },
          targetType: {
            type: "int32",
            id: 8
          },
          targetCoinB: {
            type: "string",
            id: 9
          },
          targetCoinE: {
            type: "string",
            id: 10
          },
          parentAccount: {
            type: "string",
            id: 11
          },
          parentName: {
            type: "string",
            id: 12
          },
          parentCoinB: {
            type: "string",
            id: 13
          },
          parentCoinE: {
            type: "string",
            id: 14
          },
          updatedAt: {
            type: "string",
            id: 15
          },
          logStr: {
            type: "string",
            id: 16
          }
        }
      },
      LoginLog: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          type: {
            type: "int32",
            id: 2
          },
          ip: {
            type: "string",
            id: 3
          },
          address: {
            type: "string",
            id: 4
          },
          createdAt: {
            type: "string",
            id: 5
          },
          loginTime: {
            type: "string",
            id: 6
          }
        }
      },
      ControlLog: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          targetAccount: {
            type: "string",
            id: 2
          },
          targetName: {
            type: "string",
            id: 3
          },
          userType: {
            type: "int32",
            id: 4
          },
          targetUserType: {
            type: "int32",
            id: 5
          },
          type: {
            type: "int32",
            id: 6
          },
          remarks: {
            type: "string",
            id: 7
          },
          operateTime: {
            type: "string",
            id: 8
          },
          parent: {
            type: "string",
            id: 9
          },
          parentName: {
            type: "string",
            id: 10
          }
        }
      },
      TableChangeLog: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          tableName: {
            type: "string",
            id: 2
          },
          createdAt: {
            type: "string",
            id: 3
          }
        }
      },
      CoinLogRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          },
          parentAccount: {
            type: "string",
            id: 3
          },
          pageIndex: {
            type: "int32",
            id: 4
          },
          pageSize: {
            type: "int32",
            id: 5
          },
          needAll: {
            type: "int32",
            id: 6
          },
          justWash: {
            type: "int32",
            id: 7
          },
          sortKey: {
            type: "string",
            id: 8
          },
          sortType: {
            type: "int32",
            id: 9
          },
          theKey: {
            type: "string",
            id: 10
          },
          searchTarget: {
            type: "int32",
            id: 11
          },
          userType: {
            type: "int32",
            id: 12
          },
          targetType: {
            type: "int32",
            id: 13
          },
          withChild: {
            type: "int32",
            id: 14
          }
        }
      },
      CoinLogReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "CoinLog",
            id: 1
          },
          count: {
            type: "int32",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      LoginLogRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          },
          pageIndex: {
            type: "int32",
            id: 3
          },
          pageSize: {
            type: "int32",
            id: 4
          },
          sortKey: {
            type: "string",
            id: 5
          },
          sortType: {
            type: "int32",
            id: 6
          },
          theKey: {
            type: "string",
            id: 7
          },
          type: {
            type: "int32",
            id: 8
          }
        }
      },
      LoginLogReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "LoginLog",
            id: 1
          },
          count: {
            type: "int32",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      ControlLogRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          },
          pageIndex: {
            type: "int32",
            id: 3
          },
          pageSize: {
            type: "int32",
            id: 4
          },
          sortKey: {
            type: "string",
            id: 5
          },
          sortType: {
            type: "int32",
            id: 6
          },
          theKey: {
            type: "string",
            id: 7
          },
          type: {
            type: "int32",
            id: 8
          }
        }
      },
      ControlLogReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "ControlLog",
            id: 1
          },
          count: {
            type: "int32",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      TableChangeLogRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          }
        }
      },
      TableChangeLogReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "TableChangeLog",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      ClearLogRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          endDate: {
            type: "string",
            id: 3
          }
        }
      },
      ClearLogReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  accountLog: {
    nested: {
      LogInfo: {
        fields: {
          name: {
            type: "string",
            id: 0
          },
          type: {
            type: "int32",
            id: 1
          },
          tableId: {
            type: "int32",
            id: 2
          },
          tableName: {
            type: "string",
            id: 3
          },
          screenId: {
            type: "int32",
            id: 4
          },
          inningId: {
            type: "int32",
            id: 5
          },
          compareNum: {
            type: "int32",
            id: 6
          },
          createdAt: {
            type: "string",
            id: 7
          },
          remarks: {
            type: "string",
            id: 8
          }
        }
      },
      CreateLogRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          type: {
            type: "int32",
            id: 2
          },
          tableId: {
            type: "int32",
            id: 3
          },
          tableName: {
            type: "string",
            id: 4
          },
          screenId: {
            type: "int32",
            id: 5
          },
          inningId: {
            type: "int32",
            id: 6
          },
          compareNum: {
            type: "int32",
            id: 7
          },
          remarks: {
            type: "string",
            id: 8
          }
        }
      },
      CreateLogReplay: {
        fields: {
          result: {
            type: "Code",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      QueryLogRequest: {
        fields: {
          type: {
            type: "int32",
            id: 0
          },
          accountOrName: {
            type: "string",
            id: 1
          },
          startDate: {
            type: "string",
            id: 2
          },
          endDate: {
            type: "string",
            id: 3
          },
          pageIndex: {
            type: "int32",
            id: 4
          },
          pageSize: {
            type: "int32",
            id: 5
          }
        }
      },
      QueryLogReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "LogInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      }
    }
  },
  accountLogin: {
    nested: {
      LoginRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          }
        }
      },
      LoginReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          session: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          state: {
            type: "int32",
            id: 3
          },
          resultTimeOne: {
            type: "int32",
            id: 4
          },
          resultTimeTwo: {
            type: "int32",
            id: 5
          },
          resultTimeThree: {
            type: "int32",
            id: 6
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      ControlLoginRequest: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          }
        }
      },
      ControlLoginReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          session: {
            type: "string",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      LogOutRequest: {
        fields: {
          time: {
            type: "string",
            id: 0
          }
        }
      },
      LogOutReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      ControlLogOutRequest: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          }
        }
      },
      ControlLogOutReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      PingRequest: {
        fields: {
          ping: {
            type: "string",
            id: 0
          }
        }
      },
      PingReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      }
    }
  },
  accountPrinter: {
    nested: {
      TextInfo: {
        fields: {
          fontSize: {
            type: "int32",
            id: 0
          },
          text: {
            type: "string",
            id: 1
          }
        }
      },
      AllPrintInfo: {
        fields: {
          id: {
            type: "int32",
            id: 0
          },
          isdel: {
            type: "int32",
            id: 1
          },
          textInfo: {
            rule: "repeated",
            type: "TextInfo",
            id: 3
          },
          ip: {
            type: "string",
            id: 4
          }
        }
      },
      PrintCustomReceiptRequest: {
        fields: {
          printerIp: {
            type: "string",
            id: 0
          },
          textInfo: {
            rule: "repeated",
            type: "TextInfo",
            id: 1
          }
        }
      },
      PrintCustomReceiptReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1,
              ErrorIp: 2,
              ErrorText: 3
            }
          }
        }
      },
      SetPrintTemplateRequest: {
        fields: {
          printerIp: {
            type: "string",
            id: 0
          },
          textInfo: {
            rule: "repeated",
            type: "TextInfo",
            id: 1
          }
        }
      },
      SetPrintTemplateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1,
              ErrorIp: 2,
              ErrorText: 3
            }
          }
        }
      },
      GetAllPrintTemplateRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      GetAllPrintTemplateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "AllPrintInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      DeletePrintTemplateRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          id: {
            type: "int32",
            id: 1
          }
        }
      },
      DeletePrintTemplateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      }
    }
  },
  accountTable: {
    nested: {
      TableInfo: {
        fields: {
          type: {
            type: "GameType",
            id: 0
          },
          state: {
            type: "GameState",
            id: 1
          },
          tableId: {
            type: "int32",
            id: 2
          },
          screenId: {
            type: "int32",
            id: 3
          },
          inningId: {
            type: "int32",
            id: 4
          },
          name: {
            type: "string",
            id: 5
          },
          countDown: {
            type: "int32",
            id: 6
          },
          encryptId: {
            type: "string",
            id: 7
          },
          gameInfo: {
            type: "GameInfo",
            id: 8
          },
          tableIndex: {
            type: "int32",
            id: 9
          },
          nickName: {
            type: "string",
            id: 10
          }
        }
      },
      BindTableInfo: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          printIp: {
            type: "string",
            id: 1
          },
          tableInfo: {
            type: "TableInfo",
            id: 2
          },
          autoRecieve: {
            type: "int32",
            id: 3
          },
          getNumber: {
            type: "int32",
            id: 4
          },
          enablePrint: {
            type: "int32",
            id: 5
          }
        }
      },
      AllBindTableRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      AllBindTableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "BindTableInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      AllTableRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      AllTableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "TableInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      BindTableRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          },
          printIp: {
            type: "string",
            id: 2
          },
          enablePrint: {
            type: "int32",
            id: 3
          }
        }
      },
      BindTableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1,
              RepeatIp: 2,
              RepeatTable: 3,
              ErrorIp: 4
            }
          }
        }
      },
      UnBindTableRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          }
        }
      },
      UnBindTableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      ModifyBindTableRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          oldTableId: {
            type: "int32",
            id: 1
          },
          newTableId: {
            type: "int32",
            id: 2
          },
          printIp: {
            type: "string",
            id: 3
          },
          enablePrint: {
            type: "int32",
            id: 4
          }
        }
      },
      ModifyBindTableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1,
              RepeatIp: 2,
              ErrorIp: 3
            }
          }
        }
      },
      UpdateTableAutoRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          },
          autoRecieve: {
            type: "int32",
            id: 2
          }
        }
      },
      UpdateTableAutoReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          },
          autoRecieve: {
            type: "int32",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      UpdateCompareTimeRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          resultTimeOne: {
            type: "int32",
            id: 2
          },
          resultTimeTwo: {
            type: "int32",
            id: 3
          },
          resultTimeThree: {
            type: "int32",
            id: 4
          }
        }
      },
      UpdateCompareTimeReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          resultTimeOne: {
            type: "int32",
            id: 1
          },
          resultTimeTwo: {
            type: "int32",
            id: 2
          },
          resultTimeThree: {
            type: "int32",
            id: 3
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      UpdateTablePrintStatusRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          },
          enablePrint: {
            type: "int32",
            id: 2
          }
        }
      },
      UpdateTablePrintStatusReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          },
          enablePrint: {
            type: "int32",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      RpcTableDataRequest: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          gameId: {
            type: "string",
            id: 1
          },
          frequency: {
            type: "int32",
            id: 2
          }
        }
      },
      RpcTableDataReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      ValidatePrinterIpRequest: {
        fields: {
          printerIp: {
            type: "string",
            id: 0
          }
        }
      },
      ValidatePrinterIpReplay: {
        fields: {
          result: {
            type: "Code",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      }
    }
  },
  accountUser: {
    nested: {
      AdminOptionInfo: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          state: {
            type: "int32",
            id: 3
          }
        }
      },
      CreateAccountRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "AdminOptionInfo",
            id: 2
          }
        }
      },
      CreateAccountReplay: {
        fields: {
          result: {
            type: "Code",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1,
              RepeatAccount: 2
            }
          }
        }
      },
      ModifyAccountRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "AdminOptionInfo",
            id: 2
          }
        }
      },
      ModifyAccountReplay: {
        fields: {
          result: {
            type: "Code",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      AllOptionRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          }
        }
      },
      AllOptionReplay: {
        fields: {
          result: {
            type: "Code",
            id: 1
          },
          info: {
            rule: "repeated",
            type: "AdminOptionInfo",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      },
      ModifyPasswordRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          oldPwd: {
            type: "string",
            id: 1
          },
          newPwd: {
            type: "string",
            id: 2
          }
        }
      },
      ModifyPasswordReplay: {
        fields: {
          result: {
            type: "Code",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Faild: 1
            }
          }
        }
      }
    }
  },
  admin: {
    nested: {
      PermissionInfo: {
        fields: {
          name: {
            type: "string",
            id: 0
          },
          url: {
            type: "string",
            id: 1
          }
        }
      },
      AdminInfo: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          permission: {
            rule: "repeated",
            type: "int32",
            id: 2
          },
          watchUsers: {
            rule: "repeated",
            type: "string",
            id: 3
          }
        }
      },
      AdminOptionInfo: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          state: {
            type: "int32",
            id: 3
          },
          permission: {
            rule: "repeated",
            type: "int32",
            id: 4
          },
          watchUsers: {
            rule: "repeated",
            type: "string",
            id: 5
          }
        }
      },
      LoginRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          },
          version: {
            type: "string",
            id: 2
          }
        }
      },
      LoginReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "AdminInfo",
            id: 1
          },
          gameList: {
            rule: "repeated",
            type: "string",
            id: 2
          },
          oddsInfo: {
            rule: "repeated",
            type: "OddsInfo",
            id: 3
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      RegisterRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "AdminOptionInfo",
            id: 2
          }
        }
      },
      RegisterReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateStateRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "AdminOptionInfo",
            id: 2
          }
        }
      },
      UpdateStateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateInfoRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "AdminOptionInfo",
            id: 2
          }
        }
      },
      UpdateInfoReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdatePermissionRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          accountArr: {
            rule: "repeated",
            type: "string",
            id: 2
          },
          permission: {
            rule: "repeated",
            type: "int32",
            id: 3
          }
        }
      },
      UpdatePermissionReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      AllRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          pageIndex: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          }
        }
      },
      AllReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "AdminOptionInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      ModifyPwdRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          oldPwd: {
            type: "string",
            id: 1
          },
          newPwd: {
            type: "string",
            id: 2
          },
          clientType: {
            type: "PlatFormType",
            id: 3
          }
        }
      },
      ModifyPwdReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetAdminRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          targetAccount: {
            type: "string",
            id: 1
          }
        }
      },
      GetAdminReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "AdminInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  agent: {
    nested: {
      WashType: {
        values: {
          None: 0,
          Double: 1,
          Single: 2
        }
      },
      SumInfo: {
        fields: {
          winNum: {
            type: "string",
            id: 0
          },
          washFee: {
            type: "string",
            id: 1
          },
          companyNum: {
            type: "string",
            id: 2
          },
          drawFee: {
            type: "string",
            id: 3
          }
        }
      },
      StatisticsInfo: {
        fields: {
          winNum: {
            type: "double",
            id: 1
          },
          drawNum: {
            type: "double",
            id: 2
          },
          washNum: {
            type: "double",
            id: 3
          },
          totalBet: {
            type: "double",
            id: 4
          },
          date: {
            type: "string",
            id: 5
          }
        }
      },
      AgentBaseInfo: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          state: {
            type: "int32",
            id: 2
          },
          coin: {
            type: "string",
            id: 3
          },
          drawRate: {
            type: "string",
            id: 4
          },
          washRate: {
            type: "string",
            id: 5
          },
          stake: {
            type: "string",
            id: 6
          },
          info: {
            rule: "repeated",
            type: "AgentBaseInfo",
            id: 7
          },
          washType: {
            type: "WashType",
            id: 8
          },
          parent: {
            type: "string",
            id: 9
          },
          agentType: {
            type: "int32",
            id: 10
          },
          pwdChanged: {
            type: "int32",
            id: 11
          },
          washVisiable: {
            type: "int32",
            id: 12
          },
          inStake: {
            type: "int32",
            id: 13
          },
          innerGameType: {
            type: "int32",
            id: 42
          },
          washButtonVisiable: {
            type: "int32",
            id: 14
          },
          phone: {
            type: "string",
            id: 15
          }
        }
      },
      CheckAgentInfo: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          validCoin: {
            type: "int32",
            id: 2
          },
          realaVaildCoin: {
            type: "int32",
            id: 3
          },
          disCoin: {
            type: "int32",
            id: 4
          },
          parent: {
            type: "string",
            id: 5
          },
          parentName: {
            type: "string",
            id: 6
          },
          info: {
            rule: "repeated",
            type: "CheckAgentInfo",
            id: 7
          },
          withError: {
            type: "int32",
            id: 8
          }
        }
      },
      UserInfo: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          state: {
            type: "int32",
            id: 3
          },
          coin: {
            type: "string",
            id: 4
          },
          validCoin: {
            type: "string",
            id: 5
          },
          winNum: {
            type: "int32",
            id: 6
          },
          drawRate: {
            type: "string",
            id: 7
          },
          drawNum: {
            type: "double",
            id: 8
          },
          drawFee: {
            type: "string",
            id: 9
          },
          washType: {
            type: "WashType",
            id: 10
          },
          washRate: {
            type: "string",
            id: 11
          },
          washNum: {
            type: "double",
            id: 12
          },
          washFee: {
            type: "string",
            id: 13
          },
          stake: {
            type: "string",
            id: 14
          },
          companyNum: {
            type: "string",
            id: 15
          },
          agentNum: {
            type: "string",
            id: 16
          },
          totalBet: {
            type: "double",
            id: 17
          },
          dividend: {
            type: "double",
            id: 18
          },
          addCoin: {
            type: "double",
            id: 19
          },
          subCoin: {
            type: "double",
            id: 20
          },
          remarks: {
            type: "string",
            id: 21
          },
          parent: {
            type: "string",
            id: 23
          },
          parentName: {
            type: "string",
            id: 24
          },
          onLineNum: {
            type: "int32",
            id: 26
          },
          offLineNum: {
            type: "int32",
            id: 27
          },
          unEnableTable: {
            rule: "repeated",
            type: "int32",
            id: 28
          },
          infoDate: {
            type: "string",
            id: 29
          },
          createdAt: {
            type: "string",
            id: 30
          },
          onLine: {
            type: "int32",
            id: 31
          },
          agentType: {
            type: "int32",
            id: 33
          },
          ip: {
            type: "string",
            id: 36
          },
          address: {
            type: "string",
            id: 37
          },
          loginTime: {
            type: "string",
            id: 38
          },
          limitIdArr: {
            rule: "repeated",
            type: "limitId",
            id: 39
          },
          washVisiable: {
            type: "int32",
            id: 40
          },
          userType: {
            type: "int32",
            id: 41
          },
          washedFee: {
            type: "string",
            id: 42
          },
          drawedFee: {
            type: "string",
            id: 43
          },
          unWashedFee: {
            type: "string",
            id: 44
          },
          unDrawedFee: {
            type: "string",
            id: 45
          },
          innerGameType: {
            type: "int32",
            id: 46
          },
          inStake: {
            type: "int32",
            id: 47
          },
          washButtonVisiable: {
            type: "int32",
            id: 48
          },
          allowChange: {
            type: "int32",
            id: 49
          },
          openShot: {
            type: "int32",
            id: 50
          },
          phone: {
            type: "string",
            id: 51
          }
        }
      },
      ChildAccount: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          password: {
            type: "string",
            id: 2
          },
          state: {
            type: "int32",
            id: 3
          },
          active: {
            type: "int32",
            id: 4
          },
          createdAt: {
            type: "string",
            id: 5
          },
          loginTime: {
            type: "string",
            id: 6
          },
          permission: {
            type: "string",
            id: 7
          }
        }
      },
      LoginRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          }
        }
      },
      LoginReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "AgentBaseInfo",
            id: 1
          },
          subInfo: {
            type: "ChildAccount",
            id: 2
          },
          gameList: {
            rule: "repeated",
            type: "string",
            id: 3
          },
          oddsInfo: {
            rule: "repeated",
            type: "OddsInfo",
            id: 4
          },
          errLoginNum: {
            type: "int32",
            id: 5
          },
          errLoginTime: {
            type: "int32",
            id: 6
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              errPwd: 2,
              errState: 3,
              loginLimit: 4,
              throwErr: 10
            }
          }
        }
      },
      agentAsyRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          }
        }
      },
      agentAsyReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "AgentBaseInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      CreateRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          type: {
            type: "int32",
            id: 2
          },
          info: {
            type: "UserInfo",
            id: 3
          },
          userType: {
            type: "int32",
            id: 4
          },
          autoAccount: {
            type: "int32",
            id: 5
          }
        }
      },
      CreateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          createdAccount: {
            type: "string",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              AgentTypeErr: 2,
              HadName: 3,
              ParentCoinNotEnough: 4,
              ErrorDrawRate: 5,
              ErrorWashRate: 6,
              ErrorStake: 7,
              ErrorInnerGameType: 8,
              ErrorInStake: 9,
              ErrorInRoot: 11
            }
          }
        }
      },
      UpdateRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          type: {
            type: "int32",
            id: 2
          },
          info: {
            type: "UserInfo",
            id: 3
          },
          userType: {
            type: "int32",
            id: 4
          }
        }
      },
      UpdateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          updateType: {
            type: "int32",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              ParentCoinNotEnough: 2,
              CoinNotEnough: 3,
              AgentTypeErr: 4,
              ErrorDrawRate: 5,
              ErrorWashRate: 6,
              ErrorStake: 7,
              ErrorInnerGameType: 8,
              AgentChangeErr: 9,
              ErrorInStake: 10,
              InGame: 11
            }
          }
        }
      },
      AllRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      AllReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "AgentBaseInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      TreeDataRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          parenAccount: {
            type: "string",
            id: 1
          },
          childAccount: {
            type: "string",
            id: 2
          }
        }
      },
      TreeDataReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "AgentBaseInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      ChildrenRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          },
          type: {
            type: "int32",
            id: 3
          },
          balanced: {
            type: "int32",
            id: 4
          },
          gameType: {
            type: "GameType",
            id: 5
          },
          pageIndexForAgent: {
            type: "int32",
            id: 6
          },
          pageSizeForAgent: {
            type: "int32",
            id: 7
          },
          sortKeyForAgent: {
            type: "string",
            id: 8
          },
          sortTypeForAgent: {
            type: "int32",
            id: 9
          },
          pageIndexForMember: {
            type: "int32",
            id: 10
          },
          pageSizeForMember: {
            type: "int32",
            id: 11
          },
          sortKeyForMember: {
            type: "string",
            id: 12
          },
          sortTypeForMember: {
            type: "int32",
            id: 13
          },
          needAllparent: {
            type: "int32",
            id: 14
          },
          withClearAndVoid: {
            type: "int32",
            id: 15
          },
          withNoStartedUser: {
            type: "int32",
            id: 16
          },
          specialAccount: {
            type: "string",
            id: 17
          },
          filterKeyForAgent: {
            type: "string",
            id: 18
          },
          filterKeyForMember: {
            type: "string",
            id: 19
          },
          sortByOnLine: {
            type: "int32",
            id: 20
          },
          showLowLevel: {
            type: "int32",
            id: 21
          }
        }
      },
      ChildrenReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          baseInfo: {
            type: "UserInfo",
            id: 1
          },
          agentInfo: {
            rule: "repeated",
            type: "UserInfo",
            id: 2
          },
          agentCount: {
            type: "int32",
            id: 3
          },
          memberInfo: {
            rule: "repeated",
            type: "UserInfo",
            id: 4
          },
          memberCount: {
            type: "int32",
            id: 5
          },
          parentList: {
            rule: "repeated",
            type: "string",
            id: 6
          },
          memberSumInfo: {
            type: "SumInfo",
            id: 7
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      TotalChildrenRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          },
          type: {
            type: "int32",
            id: 3
          },
          balanced: {
            type: "int32",
            id: 4
          },
          gameType: {
            type: "GameType",
            id: 5
          },
          pageIndex: {
            type: "int32",
            id: 6
          },
          pageSize: {
            type: "int32",
            id: 7
          },
          sortKey: {
            type: "string",
            id: 8
          },
          sortType: {
            type: "int32",
            id: 9
          },
          needAllparent: {
            type: "int32",
            id: 10
          },
          theKey: {
            type: "string",
            id: 11
          },
          stateFilter: {
            type: "int32",
            id: 12
          }
        }
      },
      TotalChildrenReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          baseInfo: {
            type: "UserInfo",
            id: 1
          },
          agentInfo: {
            rule: "repeated",
            type: "UserInfo",
            id: 2
          },
          memberInfo: {
            rule: "repeated",
            type: "UserInfo",
            id: 3
          },
          count: {
            type: "int32",
            id: 4
          },
          parentList: {
            rule: "repeated",
            type: "string",
            id: 5
          },
          parentInfo: {
            rule: "repeated",
            type: "UserInfo",
            id: 6
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      AgentInfoRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      AgentInfoReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          agentInfo: {
            type: "UserInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      ChildAccountRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          theAccount: {
            type: "string",
            id: 1
          }
        }
      },
      ChildAccountReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "ChildAccount",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      CreateChildAccountRequest: {
        fields: {
          info: {
            type: "ChildAccount",
            id: 0
          },
          account: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      CreateChildAccountReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "ChildAccount",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateChildAccountRequest: {
        fields: {
          info: {
            type: "ChildAccount",
            id: 0
          },
          account: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      UpdateChildAccountReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "ChildAccount",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      QueryByDayRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          },
          gameType: {
            type: "GameType",
            id: 3
          }
        }
      },
      QueryByDayReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "UserInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      ClearAgentRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "UserInfo",
            id: 2
          }
        }
      },
      ClearAgentReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetAllAgentRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          pageIndex: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          }
        }
      },
      GetAllAgentReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "UserInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      SearchAgentRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          theKey: {
            type: "string",
            id: 1
          },
          pageIndex: {
            type: "int32",
            id: 2
          },
          pageSize: {
            type: "int32",
            id: 3
          },
          property: {
            type: "string",
            id: 4
          }
        }
      },
      SearchAgentReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "UserInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      AllMemberRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      AllMemberReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "UserInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      QueryStatisticsRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          }
        }
      },
      QueryStatisticsReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "StatisticsInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      ClearRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          targetAccount: {
            type: "string",
            id: 2
          },
          userType: {
            type: "int32",
            id: 3
          },
          needVoid: {
            type: "int32",
            id: 4
          }
        }
      },
      ClearReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              InGame: 2
            }
          }
        }
      },
      WashBalanceRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          targetAccount: {
            type: "string",
            id: 2
          }
        }
      },
      WashBalanceReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          washTime: {
            type: "string",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              BatchWashing: 2,
              UserWashing: 3,
              OtherWashing: 4,
              NoWashNum: 5,
              NoWashTime: 6
            }
          }
        }
      },
      AllChildRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          },
          type: {
            type: "int32",
            id: 3
          },
          balanced: {
            type: "int32",
            id: 4
          },
          gameType: {
            type: "GameType",
            id: 5
          }
        }
      },
      AllChildReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "UserInfo",
            id: 1
          },
          memberInfo: {
            rule: "repeated",
            type: "MemberInfo",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      CreatDemoAccountReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "UserInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              NotEnough: 2
            }
          }
        }
      },
      CreatDeputySubordinateRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      CreatDeputySubordinateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "UserInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetMobileAgentRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          theAccount: {
            type: "string",
            id: 1
          },
          startDate: {
            type: "string",
            id: 2
          },
          endDate: {
            type: "string",
            id: 3
          },
          type: {
            type: "int32",
            id: 4
          },
          balanced: {
            type: "int32",
            id: 5
          },
          gameType: {
            type: "GameType",
            id: 6
          }
        }
      },
      GetMobileAgentReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "UserInfo",
            id: 1
          },
          parentInfo: {
            type: "UserInfo",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetUserinfoByDaysRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          },
          type: {
            type: "int32",
            id: 3
          },
          balanced: {
            type: "int32",
            id: 4
          },
          gameType: {
            type: "GameType",
            id: 5
          },
          pageIndex: {
            type: "int32",
            id: 6
          },
          pageSize: {
            type: "int32",
            id: 7
          }
        }
      },
      GetUserinfoByDaysReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          count: {
            type: "int32",
            id: 1
          },
          info: {
            rule: "repeated",
            type: "UserInfo",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetChildByAgentTypeRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          targetAccount: {
            type: "string",
            id: 1
          },
          agentType: {
            type: "int32",
            id: 2
          },
          pageIndex: {
            type: "int32",
            id: 3
          },
          pageSize: {
            type: "int32",
            id: 4
          },
          theKey: {
            type: "string",
            id: 5
          }
        }
      },
      GetChildByAgentTypeReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          count: {
            type: "int32",
            id: 1
          },
          info: {
            rule: "repeated",
            type: "AgentBaseInfo",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              ErrAdmin: 2
            }
          }
        }
      },
      UpdateChildAgentTypeRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          parentAccount: {
            type: "string",
            id: 2
          },
          agentType: {
            type: "int32",
            id: 3
          },
          changeAll: {
            type: "int32",
            id: 4
          },
          expectAccount: {
            rule: "repeated",
            type: "string",
            id: 5
          },
          changeAccount: {
            rule: "repeated",
            type: "string",
            id: 6
          }
        }
      },
      UpdateChildAgentTypeReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          count: {
            type: "int32",
            id: 1
          },
          info: {
            rule: "repeated",
            type: "AgentBaseInfo",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              ErrAdmin: 2,
              ErrAccount: 3
            }
          }
        }
      },
      CheckAentVaildCoinRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          targetAccount: {
            type: "string",
            id: 2
          },
          queryType: {
            type: "int32",
            id: 3
          }
        }
      },
      CheckAentVaildCoinReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          targetInfo: {
            type: "CheckAgentInfo",
            id: 1
          },
          exportInfo: {
            rule: "repeated",
            type: "CheckAgentInfo",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              ErrAccount: 2
            }
          }
        }
      },
      ResetAentVaildCoinRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          targetAccount: {
            type: "string",
            id: 2
          }
        }
      },
      ResetAentVaildCoinReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              ErrAccount: 2,
              ErrTime: 3
            }
          }
        }
      }
    }
  },
  member: {
    nested: {
      PlatFormType: {
        values: {
          PC: 0,
          Mobile: 1,
          H5: 2,
          Phone: 3
        }
      },
      MemberInfo: {
        fields: {
          watch: {
            type: "int32",
            id: 0
          },
          state: {
            type: "int32",
            id: 1
          },
          account: {
            type: "string",
            id: 2
          },
          name: {
            type: "string",
            id: 3
          },
          onLine: {
            type: "int32",
            id: 4
          },
          coin: {
            type: "string",
            id: 5
          },
          winNum: {
            type: "int32",
            id: 6
          },
          tableName: {
            type: "string",
            id: 7
          },
          gameType: {
            type: "GameType",
            id: 8
          },
          numZ: {
            type: "int32",
            id: 9
          },
          numX: {
            type: "int32",
            id: 10
          },
          numH: {
            type: "int32",
            id: 11
          },
          numZD: {
            type: "int32",
            id: 12
          },
          numXD: {
            type: "int32",
            id: 13
          },
          parentAccount: {
            type: "string",
            id: 14
          },
          parentName: {
            type: "string",
            id: 15
          },
          loginTime: {
            type: "string",
            id: 16
          },
          ip: {
            type: "string",
            id: 17
          },
          address: {
            type: "string",
            id: 18
          },
          remarks: {
            type: "string",
            id: 19
          },
          tableId: {
            type: "int32",
            id: 20
          },
          washType: {
            type: "int32",
            id: 21
          },
          limitIdArr: {
            rule: "repeated",
            type: "limitId",
            id: 22
          },
          innerGameType: {
            type: "int32",
            id: 23
          },
          drawRate: {
            type: "string",
            id: 24
          },
          washRate: {
            type: "string",
            id: 25
          },
          stake: {
            type: "string",
            id: 26
          },
          agentType: {
            type: "int32",
            id: 27
          },
          washVisiable: {
            type: "int32",
            id: 28
          },
          password: {
            type: "string",
            id: 29
          },
          loginType: {
            type: "string",
            id: 30
          },
          createdAt: {
            type: "string",
            id: 31
          },
          num1: {
            type: "int32",
            id: 32
          },
          num2: {
            type: "int32",
            id: 33
          },
          num3: {
            type: "int32",
            id: 34
          },
          num4: {
            type: "int32",
            id: 35
          },
          num5: {
            type: "int32",
            id: 36
          },
          num6: {
            type: "int32",
            id: 37
          },
          num7: {
            type: "int32",
            id: 38
          },
          num8: {
            type: "int32",
            id: 39
          },
          baijialeMemberCoinInfo: {
            type: "BaiJiaLeMemberCoinInfo",
            id: 41
          },
          longhudouMemberCoinInfo: {
            type: "LongHuDouMemberCoinInfo",
            id: 42
          },
          niuniuMemberCoinInfo: {
            type: "NiuNiuMemberCoinInfo",
            id: 43
          },
          toubaoMemberCoinInfo: {
            type: "TouBaoMemberCoinInfo",
            id: 44
          },
          lunpanMemberCoinInfo: {
            type: "LunPanMemberCoinInfo",
            id: 45
          },
          openShot: {
            type: "int32",
            id: 46
          },
          phone: {
            type: "string",
            id: 47
          }
        }
      },
      SimpleMemberInfo: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          }
        }
      },
      AllMemberRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          pageIndex: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          },
          sortKey: {
            type: "string",
            id: 3
          },
          sortType: {
            type: "int32",
            id: 4
          },
          specialAccount: {
            type: "string",
            id: 5
          },
          adminAccount: {
            type: "string",
            id: 6
          },
          gameType: {
            type: "int32",
            id: 7
          }
        }
      },
      AllMemberReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "MemberInfo",
            id: 1
          },
          count: {
            type: "int32",
            id: 2
          },
          onLineNum: {
            type: "int32",
            id: 3
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetWatchMemberRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          accountArr: {
            rule: "repeated",
            type: "string",
            id: 1
          }
        }
      },
      GetWatchMemberReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "MemberInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      SearchMemberRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          theKey: {
            type: "string",
            id: 1
          },
          pageIndex: {
            type: "int32",
            id: 2
          },
          pageSize: {
            type: "int32",
            id: 3
          },
          sortKey: {
            type: "string",
            id: 4
          },
          sortType: {
            type: "int32",
            id: 5
          },
          onlyOnline: {
            type: "int32",
            id: 6
          },
          specialAccount: {
            type: "string",
            id: 7
          },
          adminAccount: {
            type: "string",
            id: 8
          },
          gameType: {
            type: "int32",
            id: 9
          },
          property: {
            type: "string",
            id: 10
          }
        }
      },
      SearchMemberReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "MemberInfo",
            id: 1
          },
          count: {
            type: "int32",
            id: 2
          },
          onLineNum: {
            type: "int32",
            id: 3
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      AllTableRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          pageIndex: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          },
          time: {
            type: "string",
            id: 3
          }
        }
      },
      AllTableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "TableInfo",
            id: 1
          },
          time: {
            type: "string",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      WatchMemberRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          option: {
            type: "int32",
            id: 1
          },
          adminAccount: {
            type: "string",
            id: 2
          }
        }
      },
      WatchMemberReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          watchUsers: {
            rule: "repeated",
            type: "string",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      pauseMemberRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          userType: {
            type: "int32",
            id: 2
          },
          info: {
            type: "MemberInfo",
            id: 3
          }
        }
      },
      pauseMemberReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      KickMemberRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          option: {
            type: "int32",
            id: 1
          }
        }
      },
      KickMemberReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      ClearMemberRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "MemberInfo",
            id: 2
          }
        }
      },
      ClearMemberReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      QueryMemberByTableIdRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          tableId: {
            rule: "repeated",
            type: "int32",
            id: 1
          },
          pageIndex: {
            type: "int32",
            id: 2
          },
          pageSize: {
            type: "int32",
            id: 3
          },
          sortKey: {
            type: "string",
            id: 4
          },
          sortType: {
            type: "int32",
            id: 5
          },
          specialAccount: {
            type: "string",
            id: 6
          },
          adminAccount: {
            type: "string",
            id: 7
          },
          gameType: {
            type: "int32",
            id: 8
          }
        }
      },
      QueryMemberByTableIdReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "MemberInfo",
            id: 1
          },
          count: {
            type: "int32",
            id: 2
          },
          onLineNum: {
            type: "int32",
            id: 3
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      SearchSimpleMemberRequest: {
        fields: {
          date: {
            type: "string",
            id: 0
          },
          accountOrUserName: {
            type: "string",
            id: 1
          }
        }
      },
      SearchSimpleMemberReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "SimpleMemberInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              MemberNotExist: 1,
              Failed: 2
            }
          }
        }
      },
      BatchUpdateUserRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          accountArr: {
            rule: "repeated",
            type: "string",
            id: 2
          },
          unEnableTable: {
            rule: "repeated",
            type: "int32",
            id: 3
          },
          needAllMember: {
            type: "int32",
            id: 4
          }
        }
      },
      BatchUpdateUserReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      MemberIndexRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          pageSize: {
            type: "int32",
            id: 1
          },
          sortKey: {
            type: "string",
            id: 2
          },
          sortType: {
            type: "int32",
            id: 3
          },
          targeAccount: {
            type: "string",
            id: 4
          },
          withClearAndVoid: {
            type: "int32",
            id: 5
          },
          parent: {
            type: "string",
            id: 6
          }
        }
      },
      MemberIndexReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          pageIndex: {
            type: "int32",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  table: {
    nested: {
      BaseVideo: {
        fields: {
          type: {
            type: "string",
            id: 1
          },
          url: {
            rule: "repeated",
            type: "string",
            id: 2
          }
        }
      },
      VideoInfo: {
        fields: {
          name: {
            type: "string",
            id: 0
          },
          baseVideo: {
            rule: "repeated",
            type: "BaseVideo",
            id: 1
          }
        }
      },
      TableInfo: {
        fields: {
          type: {
            type: "GameType",
            id: 0
          },
          state: {
            type: "GameState",
            id: 1
          },
          tableId: {
            type: "int32",
            id: 2
          },
          screenId: {
            type: "int32",
            id: 3
          },
          inningId: {
            type: "int32",
            id: 4
          },
          name: {
            type: "string",
            id: 5
          },
          countDown: {
            type: "int32",
            id: 6
          },
          encryptId: {
            type: "string",
            id: 7
          },
          results: {
            rule: "repeated",
            type: "string",
            id: 8
          },
          chips: {
            rule: "repeated",
            type: "int32",
            id: 9
          },
          gameInfo: {
            type: "GameInfo",
            id: 10
          },
          odds: {
            type: "OddsInfo",
            id: 11
          },
          limit: {
            type: "limitProject",
            id: 12
          },
          videoInfo: {
            rule: "repeated",
            type: "VideoInfo",
            id: 13
          },
          userNums: {
            type: "int32",
            id: 14
          },
          innerIp: {
            type: "string",
            id: 15
          },
          maxAll: {
            type: "int32",
            id: 16
          },
          limitId: {
            type: "int32",
            id: 17
          },
          videoPhoneInfo: {
            rule: "repeated",
            type: "VideoInfo",
            id: 18
          },
          tableIndex: {
            type: "int32",
            id: 19
          },
          nickName: {
            type: "string",
            id: 20
          },
          tableType: {
            type: "int32",
            id: 21
          },
          videoH5Info: {
            rule: "repeated",
            type: "VideoInfo",
            id: 22
          },
          resultsJson: {
            rule: "repeated",
            type: "string",
            id: 23
          },
          videoControlInfo: {
            rule: "repeated",
            type: "VideoInfo",
            id: 24
          },
          tableSyncId: {
            type: "string",
            id: 25
          },
          featureId: {
            type: "string",
            id: 26
          },
          playTypeSwitch: {
            type: "int32",
            id: 27
          }
        }
      },
      AllTableRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          pageIndex: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          },
          clientType: {
            type: "PlatFormType",
            id: 3
          },
          requestTime: {
            type: "string",
            id: 4
          }
        }
      },
      AllTableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "TableInfo",
            id: 1
          },
          requestTime: {
            type: "string",
            id: 4
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      TableRequest: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          requestTime: {
            type: "string",
            id: 4
          }
        }
      },
      TableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          tableInfo: {
            type: "TableInfo",
            id: 1
          },
          requestTime: {
            type: "string",
            id: 4
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      EnterRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          },
          clientType: {
            type: "PlatFormType",
            id: 2
          },
          requestTime: {
            type: "string",
            id: 4
          }
        }
      },
      EnterReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          },
          gameInfo: {
            type: "GameInfo",
            id: 2
          },
          userInfo: {
            type: "UserGameInfo",
            id: 3
          },
          requestTime: {
            type: "string",
            id: 4
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      AllGameRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          pageIndex: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          }
        }
      },
      AllGameReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          gameInfo: {
            rule: "repeated",
            type: "GameInfo",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  archive: {
    nested: {
      ArchiveLogInfo: {
        fields: {
          createAt: {
            type: "string",
            id: 0
          },
          updateAt: {
            type: "string",
            id: 1
          },
          BackStatus: {
            type: "int32",
            id: 2
          }
        }
      },
      DoArchiveRequest: {
        fields: {
          account: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      DoArchiveReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      CheckInArchiveRequest: {
        fields: {
          account: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      CheckInArchiveReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          state: {
            type: "int32",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetArchiveLogRequest: {
        fields: {
          account: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      GetArchiveLogReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "ArchiveLogInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  cashPlatform: {
    nested: {
      Platform: {
        fields: {
          appId: {
            type: "int32",
            id: 0
          },
          appSecret: {
            type: "string",
            id: 1
          },
          remark: {
            type: "string",
            id: 2
          },
          agent: {
            type: "string",
            id: 3
          }
        }
      },
      GetAllPlatformRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      GetAllPlatformReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "Platform",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              InvalidParam: 1,
              AccountNotExist: 2,
              SqlSyntaxError: 3
            }
          }
        }
      },
      CreatePlatformRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "Platform",
            id: 2
          }
        }
      },
      CreatePlatformReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "Platform",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              InvalidParam: 1,
              Existed: 2,
              AgentNotExist: 3,
              SqlSyntaxError: 4,
              InsertFailed: 5
            }
          }
        }
      },
      EditPlatformRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "Platform",
            id: 2
          }
        }
      },
      EditPlatformReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "Platform",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              InvalidParam: 1,
              PlatformNotExist: 2,
              SqlSyntaxError: 3,
              DeleteSqlFailed: 4,
              AgentNotExist: 5,
              UpdateFailed: 6,
              AccountNotExist: 7
            }
          }
        }
      },
      DelPlatformRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          appId: {
            type: "int32",
            id: 2
          }
        }
      },
      DelPlatformReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              InvalidParam: 1,
              PlatformNotExisted: 2,
              SqlSyntaxError: 3,
              DeleteSqlFailed: 4
            }
          }
        }
      }
    }
  },
  config: {
    nested: {
      ChatData: {
        fields: {
          interval: {
            type: "int32",
            id: 0
          },
          word: {
            type: "int32",
            id: 1
          }
        }
      },
      WashQuota: {
        fields: {
          minQuota: {
            type: "int32",
            id: 0
          },
          strokeQuota: {
            type: "int32",
            id: 1
          },
          dayQuota: {
            type: "int32",
            id: 2
          }
        }
      },
      CompanyBank: {
        fields: {
          name: {
            type: "string",
            id: 1
          },
          id: {
            type: "string",
            id: 2
          },
          address: {
            type: "string",
            id: 3
          },
          holder: {
            type: "string",
            id: 4
          }
        }
      },
      recharge: {
        fields: {
          agentArr: {
            rule: "repeated",
            type: "string",
            id: 1
          }
        }
      },
      PlayInfo: {
        fields: {
          agentAccount: {
            type: "string",
            id: 0
          },
          maxMemberNum: {
            type: "int32",
            id: 1
          },
          limitAmount: {
            type: "int32",
            id: 2
          }
        }
      },
      GetBankConfigRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      GetBankConfigReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "recharge",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateBankConfigRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "recharge",
            id: 2
          }
        }
      },
      UpdateBankConfigReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetChatConfigRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      GetChatConfigReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "ChatData",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateChatConfigRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "ChatData",
            id: 2
          }
        }
      },
      UpdateChatConfigReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetWashConfigRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      GetWashConfigReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "string",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateWashConfigRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "string",
            id: 2
          }
        }
      },
      UpdateWashConfigReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetQuotaConfigRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      GetQuotaConfigReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "WashQuota",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateQuotaConfigRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "WashQuota",
            id: 2
          }
        }
      },
      UpdateQuotaConfigReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetPlayConfigRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      GetPlayConfigReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "PlayInfo",
            id: 1
          },
          haveAgent: {
            type: "int32",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdatePlayConfigRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "PlayInfo",
            id: 2
          }
        }
      },
      UpdatePlayConfigReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              NotEnough: 2
            }
          }
        }
      }
    }
  },
  control: {
    nested: {
      ContorlInfo: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          state: {
            type: "int32",
            id: 3
          }
        }
      },
      LoginRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          },
          version: {
            type: "string",
            id: 2
          }
        }
      },
      LoginReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "TableInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetTableRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          }
        }
      },
      GetTableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "TableInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      RegisterRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          state: {
            type: "int32",
            id: 3
          }
        }
      },
      RegisterReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateRequest: {
        fields: {
          info: {
            type: "ContorlInfo",
            id: 0
          }
        }
      },
      UpdateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      AllRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      AllReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "ContorlInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      StartGameRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      StartGameReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          },
          gameInfo: {
            type: "GameInfo",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GameResultRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          resultFirst: {
            type: "string",
            id: 2
          },
          resultSecond: {
            type: "string",
            id: 3
          },
          gameId: {
            type: "string",
            id: 4
          },
          pokerZ: {
            type: "string",
            id: 5
          },
          pokerX: {
            type: "string",
            id: 6
          },
          pokerNN: {
            type: "string",
            id: 7
          },
          distantTime: {
            type: "string",
            id: 8
          },
          sicBoArr: {
            rule: "repeated",
            type: "int32",
            id: 9
          }
        }
      },
      GameResultReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      CancelResultRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          gameId: {
            type: "string",
            id: 1
          }
        }
      },
      CancelResultReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      ShuffleTableRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      ShuffleTableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "TableInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      QuitRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      QuitReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      VirtualInfoRequest: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          gameId: {
            type: "string",
            id: 1
          },
          type: {
            type: "int32",
            id: 2
          },
          posType: {
            type: "int32",
            id: 3
          },
          poker: {
            type: "string",
            id: 4
          }
        }
      },
      VirtualInfoReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "GameInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  forbidden: {
    nested: {
      ForbiddenBody: {
        fields: {
          remarks: {
            type: "string",
            id: 0
          },
          endTime: {
            type: "string",
            id: 1
          }
        }
      },
      UserInfo: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          beginTime: {
            type: "string",
            id: 2
          },
          endTime: {
            type: "string",
            id: 3
          }
        }
      },
      SetForbiddenRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          userInfo: {
            rule: "repeated",
            type: "UserInfo",
            id: 2
          },
          info: {
            type: "ForbiddenBody",
            id: 3
          }
        }
      },
      SetForbiddenReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              ErrUser: 2,
              ErrAdmin: 3,
              ErrCatch: 10
            }
          }
        }
      },
      VoidForbiddenRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          userInfo: {
            rule: "repeated",
            type: "UserInfo",
            id: 2
          }
        }
      },
      VoidForbiddenReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              ErrUser: 2,
              ErrAdmin: 3,
              ErrCatch: 10
            }
          }
        }
      },
      GetForbiddenRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          pageIndex: {
            type: "int32",
            id: 2
          },
          pageSize: {
            type: "int32",
            id: 3
          }
        }
      },
      GetForbiddenReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "UserInfo",
            id: 1
          },
          count: {
            type: "int32",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              ErrUser: 2,
              ErrAdmin: 3,
              ErrCatch: 10
            }
          }
        }
      }
    }
  },
  ipBlack: {
    nested: {
      AllIpBlackRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      AllIpBlackReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          ip: {
            rule: "repeated",
            type: "string",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      AddIpBlackRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          ip: {
            type: "string",
            id: 2
          }
        }
      },
      AddIpBlackReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      DeleteIpBlackRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          ip: {
            type: "string",
            id: 2
          }
        }
      },
      DeleteIpBlackReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  login: {
    nested: {
      AuthRequest: {
        fields: {
          account: {
            type: "string",
            id: 1
          },
          token: {
            type: "string",
            id: 2
          },
          clientType: {
            type: "PlatFormType",
            id: 3
          },
          version: {
            type: "string",
            id: 4
          }
        }
      },
      AuthReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          coin: {
            type: "int32",
            id: 1
          },
          state: {
            type: "UserStateType",
            id: 2
          },
          name: {
            type: "string",
            id: 3
          },
          pwdChanged: {
            type: "int32",
            id: 4
          },
          userLimit: {
            rule: "repeated",
            type: "limitProject",
            id: 5
          },
          washVisiable: {
            type: "int32",
            id: 6
          },
          userOdds: {
            rule: "repeated",
            type: "OddsInfo",
            id: 7
          },
          innerGameType: {
            type: "int32",
            id: 8
          },
          agentType: {
            type: "int32",
            id: 9
          },
          propayCoin: {
            type: "int32",
            id: 10
          },
          payVisible: {
            type: "int32",
            id: 11
          },
          gameOperator: {
            type: "string",
            id: 12
          },
          gameList: {
            rule: "repeated",
            type: "string",
            id: 13
          },
          forbidden: {
            type: "int32",
            id: 14
          },
          minWithdrawalQuota: {
            type: "int32",
            id: 15
          },
          maxWithdrawalQuota: {
            type: "int32",
            id: 16
          },
          isTourist: {
            type: "int32",
            id: 17
          },
          openShot: {
            type: "int32",
            id: 18
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              UnExist: 2,
              Incorrect: 3
            }
          }
        }
      },
      LoginRequest: {
        fields: {
          account: {
            type: "string",
            id: 1
          },
          password: {
            type: "string",
            id: 2
          },
          time: {
            type: "string",
            id: 3
          },
          clientType: {
            type: "PlatFormType",
            id: 4
          },
          loginType: {
            type: "string",
            id: 5
          }
        }
      },
      LoginReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          port: {
            type: "int32",
            id: 1
          },
          ip: {
            type: "string",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              UnExist: 2,
              Incorrect: 3
            }
          }
        }
      },
      Ping: {
        fields: {
          time: {
            type: "string",
            id: 1
          },
          line: {
            type: "int32",
            id: 2
          }
        }
      },
      Pong: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          time: {
            type: "string",
            id: 1
          },
          line: {
            type: "int32",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      LogOutRequest: {
        fields: {
          time: {
            type: "string",
            id: 1
          }
        }
      },
      LogOutReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          time: {
            type: "string",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      OffLineRequest: {
        fields: {
          account: {
            type: "string",
            id: 1
          },
          clientType: {
            type: "PlatFormType",
            id: 2
          }
        }
      },
      OffLineReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      CheckOnLineRequest: {
        fields: {
          phoneUser: {
            type: "int32",
            id: 0
          },
          accountArr: {
            rule: "repeated",
            type: "string",
            id: 1
          }
        }
      },
      CheckOnLineReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetGameVersionRequest: {
        fields: {
          clientType: {
            type: "PlatFormType",
            id: 0
          }
        }
      },
      GetGameVersionReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          game: {
            type: "string",
            id: 1
          },
          phone: {
            type: "string",
            id: 2
          },
          mobile: {
            type: "string",
            id: 3
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      ReconnectRequest: {
        fields: {
          account: {
            type: "string",
            id: 1
          }
        }
      },
      ReconnectReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UCLoginRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          udid: {
            type: "int32",
            id: 2
          },
          time: {
            type: "string",
            id: 3
          },
          clientType: {
            type: "PlatFormType",
            id: 4
          },
          loginType: {
            type: "string",
            id: 5
          },
          appId: {
            type: "int32",
            id: 6
          }
        }
      },
      UCLoginReply: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  message: {
    nested: {
      Head: {
        fields: {
          session: {
            type: "string",
            id: 0
          }
        }
      },
      RequestMessage: {
        fields: {
          head: {
            type: "Head",
            id: 0
          },
          body: {
            rule: "required",
            type: "bytes",
            id: 1
          }
        }
      },
      ReplayCode: {
        values: {
          Success: 0,
          InvalidSession: 20,
          ExpiredSession: 21,
          ErrorRequest: 30
        }
      },
      ReplayHead: {
        fields: {
          result: {
            rule: "required",
            type: "ReplayCode",
            id: 0
          },
          session: {
            type: "string",
            id: 1
          }
        }
      },
      ReplayMessage: {
        fields: {
          head: {
            rule: "required",
            type: "ReplayHead",
            id: 0
          },
          body: {
            type: "bytes",
            id: 1
          }
        }
      },
      WebMessage: {
        fields: {
          msg: {
            type: "string",
            id: 0
          }
        }
      }
    }
  },
  monitor: {
    nested: {
      MonitorInfo: {
        fields: {
          name: {
            type: "string",
            id: 0
          },
          count: {
            type: "int32",
            id: 1
          },
          numArr: {
            rule: "repeated",
            type: "int32",
            id: 2
          }
        }
      },
      AllRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          }
        }
      },
      AllReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "MonitorInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      TestRequest: {
        fields: {
          type: {
            type: "int32",
            id: 0
          }
        }
      },
      TestReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  notice: {
    nested: {
      NoticeType: {
        values: {
          Table_All: 1,
          Table_Part: 2,
          Agent_All: 3,
          Agent_Part: 4,
          Member_All: 5,
          Member_Part: 6,
          Phone_All: 7,
          Phone_Part: 8,
          Home_All: 9
        }
      },
      ReleaseType: {
        values: {
          immediate: 1,
          regular: 2,
          noSend: 3
        }
      },
      NoticeInfo: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          title: {
            type: "string",
            id: 1
          },
          content: {
            type: "string",
            id: 2
          },
          releaseTime: {
            type: "string",
            id: 3
          },
          target: {
            rule: "repeated",
            type: "string",
            id: 4
          },
          targetName: {
            rule: "repeated",
            type: "string",
            id: 5
          },
          type: {
            type: "NoticeType",
            id: 6
          },
          id: {
            type: "int32",
            id: 7
          },
          name: {
            type: "string",
            id: 8
          },
          released: {
            type: "int32",
            id: 9
          },
          releaseType: {
            type: "ReleaseType",
            id: 10
          }
        }
      },
      TableInfo: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          tableName: {
            type: "string",
            id: 1
          },
          tableIndex: {
            type: "int32",
            id: 2
          },
          nickName: {
            type: "string",
            id: 3
          }
        }
      },
      TableList: {
        fields: {
          type: {
            type: "GameType",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "TableInfo",
            id: 1
          }
        }
      },
      GetRequest: {
        fields: {
          type: {
            type: "NoticeType",
            id: 0
          },
          pageIndex: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          }
        }
      },
      GetReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "NoticeInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      CreateRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "NoticeInfo",
            id: 2
          }
        }
      },
      CreateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "NoticeInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "NoticeInfo",
            id: 2
          }
        }
      },
      UpdateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "NoticeInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      DeleteRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          id: {
            type: "int32",
            id: 2
          }
        }
      },
      DeleteReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      TableRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      TableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "TableList",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetAgentRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      GetAgentReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "NoticeInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetMemberRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          type: {
            type: "int32",
            id: 1
          }
        }
      },
      GetMemberReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "NoticeInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  pay: {
    nested: {
      Channel: {
        values: {
          wanshi: 1,
          rongfu: 2,
          daifu: 3
        }
      },
      PayStateRF: {
        values: {
          Unpaid: 0,
          Pending: 1,
          Completed: 2,
          Cancelled: 3,
          Representation: 4
        }
      },
      PayStatePO: {
        values: {
          Pending: 1,
          Cancelled: 3,
          Failed: 4,
          Representation: 5
        }
      },
      PayChannel: {
        fields: {
          id: {
            type: "int32",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          mode: {
            type: "string",
            id: 2
          },
          flag: {
            type: "string",
            id: 3
          }
        }
      },
      PayMethod: {
        fields: {
          id: {
            type: "int32",
            id: 0
          },
          methodId: {
            type: "int32",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          channelId: {
            type: "int32",
            id: 3
          },
          channelName: {
            type: "string",
            id: 4
          },
          min: {
            type: "int32",
            id: 5
          },
          max: {
            type: "int32",
            id: 6
          },
          mode: {
            type: "string",
            id: 7
          },
          actived: {
            type: "int32",
            id: 8
          },
          info: {
            type: "string",
            id: 9
          },
          exchangeRate: {
            type: "string",
            id: 10
          },
          payType: {
            type: "int32",
            id: 11
          }
        }
      },
      PayOrder: {
        fields: {
          id: {
            type: "string",
            id: 0
          },
          account: {
            type: "string",
            id: 1
          },
          state: {
            type: "int32",
            id: 2
          },
          num: {
            type: "int32",
            id: 3
          },
          billType: {
            type: "int32",
            id: 4
          },
          name: {
            type: "string",
            id: 5
          },
          payMethodName: {
            type: "string",
            id: 9
          },
          remarks: {
            type: "string",
            id: 12
          },
          completeTime: {
            type: "string",
            id: 13
          },
          coinB: {
            type: "string",
            id: 14
          },
          coinE: {
            type: "string",
            id: 15
          },
          createdAt: {
            type: "string",
            id: 16
          },
          channelId: {
            type: "int32",
            id: 17
          }
        }
      },
      WithdrawalsRequest: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          billId: {
            type: "string",
            id: 2
          },
          account: {
            type: "string",
            id: 3
          },
          name: {
            type: "string",
            id: 4
          },
          bankAccount: {
            type: "string",
            id: 5
          },
          bankName: {
            type: "string",
            id: 6
          },
          checkUserAccount: {
            type: "string",
            id: 7
          },
          checkUserName: {
            type: "string",
            id: 8
          },
          checkStatus: {
            type: "int32",
            id: 9
          },
          remarks: {
            type: "string",
            id: 10
          },
          userRemarks: {
            type: "string",
            id: 11
          },
          moneyNum: {
            type: "int32",
            id: 12
          },
          coinNum: {
            type: "int32",
            id: 13
          },
          checkTime: {
            type: "string",
            id: 14
          },
          completeTime: {
            type: "string",
            id: 15
          },
          createdAt: {
            type: "string",
            id: 16
          },
          leftCoin: {
            type: "string",
            id: 17
          },
          billType: {
            type: "int32",
            id: 18
          },
          phone: {
            type: "string",
            id: 19
          },
          payTime: {
            type: "string",
            id: 20
          },
          payMethod: {
            type: "string",
            id: 21
          },
          payProvinces: {
            type: "string",
            id: 22
          },
          userName: {
            type: "string",
            id: 23
          },
          operatorAccount: {
            type: "string",
            id: 24
          },
          operatorName: {
            type: "string",
            id: 25
          },
          operatorRemark: {
            type: "string",
            id: 26
          },
          actualAmount: {
            type: "int32",
            id: 27
          }
        }
      },
      PayRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          num: {
            type: "int32",
            id: 2
          },
          payMethodId: {
            type: "int32",
            id: 3
          },
          payModeId: {
            type: "int32",
            id: 4
          },
          payor: {
            type: "string",
            id: 5
          },
          payAccount: {
            type: "string",
            id: 6
          },
          payName: {
            type: "string",
            id: 7
          },
          remarks: {
            type: "string",
            id: 9
          },
          payTime: {
            type: "string",
            id: 10
          },
          payCard: {
            type: "string",
            id: 11
          },
          payProvinces: {
            type: "string",
            id: 12
          },
          payMethod: {
            type: "string",
            id: 13
          }
        }
      },
      PayReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          url: {
            type: "string",
            id: 1
          },
          params: {
            type: "string",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              CreateOrderFailed: 2
            }
          }
        }
      },
      DrawPayApplyRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          bankAccount: {
            type: "string",
            id: 2
          },
          bankName: {
            type: "string",
            id: 3
          },
          userRemarks: {
            type: "string",
            id: 4
          },
          moneyNum: {
            type: "int32",
            id: 5
          },
          payMethodId: {
            type: "int32",
            id: 6
          },
          payModeId: {
            type: "int32",
            id: 7
          },
          phoneNum: {
            type: "string",
            id: 8
          },
          holder: {
            type: "string",
            id: 9
          },
          payProvinces: {
            type: "string",
            id: 10
          }
        }
      },
      DrawPayApplyReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          billId: {
            type: "string",
            id: 1
          },
          requestTime: {
            type: "string",
            id: 2
          },
          requestCoin: {
            type: "int32",
            id: 3
          },
          dayCoin: {
            type: "int32",
            id: 4
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              CoinNotEnough: 2,
              MoreMaxQuota: 3,
              MoreDayQuota: 4,
              MoreMinQuota: 5
            }
          }
        }
      },
      PayOrderRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          startDate: {
            type: "string",
            id: 2
          },
          endDate: {
            type: "string",
            id: 3
          },
          pageIndex: {
            type: "int32",
            id: 4
          },
          pageSize: {
            type: "int32",
            id: 5
          },
          billType: {
            type: "int32",
            id: 6
          },
          id: {
            type: "string",
            id: 7
          },
          state: {
            type: "int32",
            id: 10
          },
          channel: {
            type: "int32",
            id: 11
          }
        }
      },
      PayOrderReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "PayOrder",
            id: 1
          },
          count: {
            type: "int32",
            id: 2
          },
          totalNum: {
            type: "int32",
            id: 3
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      WithdrawalsRejectReplay: {
        fields: {
          remarks: {
            type: "string",
            id: 1
          }
        }
      },
      QueryWithDrawalsRequest: {
        fields: {
          account: {
            rule: "required",
            type: "string",
            id: 1
          },
          name: {
            rule: "required",
            type: "string",
            id: 2
          },
          startDate: {
            rule: "required",
            type: "string",
            id: 3
          },
          endDate: {
            rule: "required",
            type: "string",
            id: 4
          },
          pageIndex: {
            rule: "required",
            type: "int32",
            id: 5
          },
          pageSize: {
            rule: "required",
            type: "int32",
            id: 6
          },
          theKey: {
            type: "string",
            id: 7
          },
          checkStatus: {
            type: "int32",
            id: 8
          },
          billType: {
            type: "int32",
            id: 9
          }
        }
      },
      QueryWithDrawalsReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "WithdrawalsRequest",
            id: 1
          },
          count: {
            type: "int32",
            id: 2
          },
          rechargeCount: {
            type: "int32",
            id: 3
          },
          lastRechargeTime: {
            type: "string",
            id: 4
          },
          lastWithDrawalTime: {
            type: "string",
            id: 5
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateWithDrawalsRequest: {
        fields: {
          account: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          info: {
            type: "WithdrawalsRequest",
            id: 3
          }
        }
      },
      UpdateWithDrawalsReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              CoinNotEnough: 2,
              WithdrawalMore: 3
            }
          }
        }
      },
      CreateWithDrawalsRequest: {
        fields: {
          account: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          info: {
            type: "WithdrawalsRequest",
            id: 3
          }
        }
      },
      CreateWithDrawalsReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GetPaymentMethodRequest: {
        fields: {
          account: {
            type: "string",
            id: 1
          }
        }
      },
      GetPaymentMethodReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "PayMethod",
            id: 1
          },
          channelInfo: {
            rule: "repeated",
            type: "PayChannel",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      WithdrawalsAgreeReplay: {
        fields: {
          info: {
            type: "WithdrawalsRequest",
            id: 1
          }
        }
      },
      CreatePaymentMethodRequest: {
        fields: {
          account: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          info: {
            type: "PayMethod",
            id: 3
          }
        }
      },
      CreatePaymentMethodReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdatePaymentMethodRequest: {
        fields: {
          account: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          info: {
            type: "PayMethod",
            id: 3
          }
        }
      },
      UpdatePaymentMethodReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      QueryRechargeChannelRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          }
        }
      },
      QueryRechargeChannelReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "PayChannel",
            id: 1
          },
          curId: {
            rule: "repeated",
            type: "int32",
            id: 2
          },
          methodInfo: {
            rule: "repeated",
            type: "PayMethod",
            id: 3
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              ErrAdmin: 2
            }
          }
        }
      }
    }
  },
  phoneUser: {
    nested: {
      phoneUserInfo: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          },
          unEnableTable: {
            rule: "repeated",
            type: "int32",
            id: 2
          },
          onLine: {
            type: "int32",
            id: 3
          },
          createrAccount: {
            type: "string",
            id: 5
          },
          remarks: {
            type: "string",
            id: 6
          },
          createAt: {
            type: "string",
            id: 7
          },
          loginTime: {
            type: "string",
            id: 8
          },
          ip: {
            type: "string",
            id: 9
          },
          address: {
            type: "string",
            id: 10
          },
          tableId: {
            type: "int32",
            id: 11
          },
          tableName: {
            type: "string",
            id: 12
          },
          gameType: {
            type: "GameType",
            id: 13
          },
          state: {
            type: "int32",
            id: 14
          }
        }
      },
      AllUserRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          pageIndex: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          }
        }
      },
      AllUserReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "phoneUserInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      CreateRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            rule: "repeated",
            type: "phoneUserInfo",
            id: 2
          }
        }
      },
      CreateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      DeleteRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          accountArr: {
            rule: "repeated",
            type: "string",
            id: 2
          }
        }
      },
      DeleteReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          userAccount: {
            type: "string",
            id: 2
          },
          info: {
            type: "phoneUserInfo",
            id: 3
          }
        }
      },
      UpdateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      BatchUpdateRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          accountArr: {
            rule: "repeated",
            type: "string",
            id: 2
          },
          unEnableTable: {
            rule: "repeated",
            type: "int32",
            id: 3
          }
        }
      },
      BatchUpdateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  queryTool: {
    nested: {
      InningInfo: {
        fields: {
          id: {
            type: "int32",
            id: 0
          },
          winNum: {
            type: "int32",
            id: 1
          },
          littleFee: {
            type: "int32",
            id: 2
          },
          numZ: {
            type: "int32",
            id: 3
          },
          numX: {
            type: "int32",
            id: 4
          },
          numH: {
            type: "int32",
            id: 5
          },
          numZD: {
            type: "int32",
            id: 6
          },
          numXD: {
            type: "int32",
            id: 7
          },
          result: {
            type: "string",
            id: 8
          },
          time: {
            type: "string",
            id: 9
          },
          state: {
            type: "string",
            id: 10
          },
          gameType: {
            type: "int32",
            id: 11
          },
          gameId: {
            type: "string",
            id: 12
          },
          resultState: {
            type: "int32",
            id: 13
          },
          scanTime: {
            type: "string",
            id: 14
          },
          baijialePoolInfo: {
            type: "BaiJiaLePoolInfo",
            id: 15
          },
          longhudouPoolInfo: {
            type: "LongHuDouPoolInfo",
            id: 16
          },
          niuniuPoolInfo: {
            type: "NiuNiuPoolInfo",
            id: 17
          },
          toubaoPoolInfo: {
            type: "TouBaoPoolInfo",
            id: 18
          },
          lunpanPoolInfo: {
            type: "LunPanPoolInfo",
            id: 19
          }
        }
      },
      ScreenInfo: {
        fields: {
          id: {
            type: "int32",
            id: 0
          },
          winNum: {
            type: "int32",
            id: 1
          },
          littleFee: {
            type: "int32",
            id: 2
          },
          numZ: {
            type: "int32",
            id: 3
          },
          numX: {
            type: "int32",
            id: 4
          },
          numH: {
            type: "int32",
            id: 5
          },
          numZD: {
            type: "int32",
            id: 6
          },
          numXD: {
            type: "int32",
            id: 7
          },
          info: {
            rule: "repeated",
            type: "InningInfo",
            id: 8
          },
          result: {
            rule: "repeated",
            type: "string",
            id: 9
          },
          gameType: {
            type: "int32",
            id: 10
          },
          baijialePoolInfo: {
            type: "BaiJiaLePoolInfo",
            id: 11
          },
          longhudouPoolInfo: {
            type: "LongHuDouPoolInfo",
            id: 12
          },
          niuniuPoolInfo: {
            type: "NiuNiuPoolInfo",
            id: 13
          },
          toubaoPoolInfo: {
            type: "TouBaoPoolInfo",
            id: 14
          },
          lunpanPoolInfo: {
            type: "LunPanPoolInfo",
            id: 15
          },
          tableId: {
            type: "int32",
            id: 16
          }
        }
      },
      TableInfo: {
        fields: {
          name: {
            type: "string",
            id: 0
          },
          winNum: {
            type: "int32",
            id: 1
          },
          littleFee: {
            type: "int32",
            id: 2
          },
          numZ: {
            type: "int32",
            id: 3
          },
          numX: {
            type: "int32",
            id: 4
          },
          numH: {
            type: "int32",
            id: 5
          },
          numZD: {
            type: "int32",
            id: 6
          },
          numXD: {
            type: "int32",
            id: 7
          },
          info: {
            rule: "repeated",
            type: "ScreenInfo",
            id: 8
          },
          date: {
            type: "string",
            id: 9
          },
          limitId: {
            type: "int32",
            id: 10
          },
          tableIndex: {
            type: "int32",
            id: 11
          },
          nickName: {
            type: "string",
            id: 12
          },
          gameType: {
            type: "int32",
            id: 13
          },
          baijialePoolInfo: {
            type: "BaiJiaLePoolInfo",
            id: 14
          },
          longhudouPoolInfo: {
            type: "LongHuDouPoolInfo",
            id: 15
          },
          niuniuPoolInfo: {
            type: "NiuNiuPoolInfo",
            id: 16
          },
          toubaoPoolInfo: {
            type: "TouBaoPoolInfo",
            id: 17
          },
          lunpanPoolInfo: {
            type: "LunPanPoolInfo",
            id: 18
          }
        }
      },
      TableInfoByDates: {
        fields: {
          name: {
            type: "string",
            id: 0
          },
          winNum: {
            type: "int32",
            id: 1
          },
          littleFee: {
            type: "int32",
            id: 2
          },
          numZ: {
            type: "int32",
            id: 3
          },
          numX: {
            type: "int32",
            id: 4
          },
          numH: {
            type: "int32",
            id: 5
          },
          numZD: {
            type: "int32",
            id: 6
          },
          numXD: {
            type: "int32",
            id: 7
          },
          info: {
            rule: "repeated",
            type: "TableInfo",
            id: 8
          },
          tableIndex: {
            type: "int32",
            id: 9
          },
          gameType: {
            type: "int32",
            id: 10
          },
          baijialePoolInfo: {
            type: "BaiJiaLePoolInfo",
            id: 11
          },
          longhudouPoolInfo: {
            type: "LongHuDouPoolInfo",
            id: 12
          },
          niuniuPoolInfo: {
            type: "NiuNiuPoolInfo",
            id: 13
          },
          toubaoPoolInfo: {
            type: "TouBaoPoolInfo",
            id: 14
          },
          lunpanPoolInfo: {
            type: "LunPanPoolInfo",
            id: 15
          }
        }
      },
      ScreenNum: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          num: {
            type: "int32",
            id: 2
          },
          tableIndex: {
            type: "int32",
            id: 3
          },
          gameType: {
            type: "int32",
            id: 4
          },
          tableType: {
            type: "int32",
            id: 5
          },
          tableSyncId: {
            type: "string",
            id: 6
          }
        }
      },
      GameBaseInfo: {
        fields: {
          gameId: {
            type: "string",
            id: 0
          },
          tableName: {
            type: "string",
            id: 1
          },
          screenId: {
            type: "int32",
            id: 2
          },
          inningId: {
            type: "int32",
            id: 3
          },
          startTime: {
            type: "string",
            id: 4
          },
          endTime: {
            type: "string",
            id: 5
          },
          resultTime: {
            type: "string",
            id: 6
          },
          result: {
            type: "string",
            id: 7
          },
          state: {
            type: "string",
            id: 8
          },
          isValid: {
            type: "int32",
            id: 9
          },
          isModify: {
            type: "int32",
            id: 10
          },
          isAbort: {
            type: "int32",
            id: 11
          },
          gameType: {
            type: "GameType",
            id: 12
          },
          coinZ: {
            type: "int32",
            id: 13
          },
          coinX: {
            type: "int32",
            id: 14
          },
          coinH: {
            type: "int32",
            id: 15
          },
          coinZd: {
            type: "int32",
            id: 16
          },
          coinXd: {
            type: "int32",
            id: 17
          },
          totalBet: {
            type: "int32",
            id: 18
          },
          winNum: {
            type: "int32",
            id: 19
          },
          coinJson: {
            type: "string",
            id: 20
          },
          memberCoinJson: {
            type: "string",
            id: 21
          },
          pokerZ: {
            type: "string",
            id: 22
          },
          pokerX: {
            type: "string",
            id: 23
          },
          pokerNN: {
            type: "string",
            id: 24
          },
          resultJson: {
            type: "string",
            id: 25
          },
          scanTime: {
            type: "string",
            id: 26
          }
        }
      },
      QueryTableRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          date: {
            type: "string",
            id: 1
          }
        }
      },
      QueryTableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "TableInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      QueryTableByDateRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          },
          pageIndex: {
            type: "int32",
            id: 3
          },
          pageSize: {
            type: "int32",
            id: 4
          },
          gameType: {
            type: "int32",
            id: 5
          }
        }
      },
      QueryTableByDateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "TableInfoByDates",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      ScreenNumRequest: {
        fields: {
          date: {
            type: "string",
            id: 0
          },
          currentDay: {
            type: "int32",
            id: 1
          }
        }
      },
      ScreenNumReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "ScreenNum",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      GamesRequest: {
        fields: {
          date: {
            type: "string",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          },
          screenId: {
            type: "int32",
            id: 2
          },
          type: {
            type: "int32",
            id: 3
          },
          gameId: {
            type: "string",
            id: 4
          },
          currentDay: {
            type: "int32",
            id: 5
          }
        }
      },
      GamesReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          resultArr: {
            rule: "repeated",
            type: "string",
            id: 1
          },
          info: {
            rule: "repeated",
            type: "GameBaseInfo",
            id: 2
          },
          resultsJson: {
            rule: "repeated",
            type: "string",
            id: 3
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      QueryGamesRequest: {
        fields: {
          date: {
            type: "string",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          },
          screenId: {
            type: "int32",
            id: 2
          },
          type: {
            type: "int32",
            id: 3
          }
        }
      },
      QueryGamesReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          resultArr: {
            rule: "repeated",
            type: "string",
            id: 1
          },
          info: {
            rule: "repeated",
            type: "InningInfo",
            id: 2
          },
          resultsJson: {
            rule: "repeated",
            type: "string",
            id: 3
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  rpc: {
    nested: {
      RpcRequest: {
        fields: {
          room: {
            type: "string",
            id: 0
          },
          event: {
            type: "string",
            id: 1
          },
          data: {
            type: "bytes",
            id: 2
          }
        }
      },
      PlayerInfoReplay: {
        fields: {
          info: {
            type: "PlayerInfo",
            id: 0
          }
        }
      },
      PauseUserReplay: {
        fields: {
          info: {
            type: "PlayerInfo",
            id: 0
          }
        }
      },
      TableInfoReplay: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          info: {
            type: "TableInfo",
            id: 1
          }
        }
      },
      GameInfoReplay: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          info: {
            type: "GameInfo",
            id: 1
          }
        }
      },
      TableInfoArrReplay: {
        fields: {
          tableIdArr: {
            rule: "repeated",
            type: "int32",
            id: 0
          },
          infoArr: {
            rule: "repeated",
            type: "TableInfo",
            id: 1
          }
        }
      },
      CancelTableReplay: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          info: {
            type: "TableInfo",
            id: 1
          }
        }
      },
      ChatReplay: {
        fields: {
          info: {
            type: "ChatInfo",
            id: 0
          }
        }
      },
      UpdateOddsReplay: {
        fields: {
          userOdds: {
            rule: "repeated",
            type: "OddsInfo",
            id: 0
          }
        }
      },
      washReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      PayOrderReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          url: {
            type: "string",
            id: 1
          },
          channel: {
            type: "int32",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      ForbiddenReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateWithdrawalConfigReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          minQuota: {
            type: "int32",
            id: 1
          },
          maxQuota: {
            type: "int32",
            id: 2
          },
          dayQuota: {
            type: "int32",
            id: 3
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      updateWithdrawalProgressReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          coinNum: {
            type: "int32",
            id: 1
          },
          info: {
            type: "string",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  },
  tableOption: {
    nested: {
      TableOptionInfo: {
        fields: {
          tableId: {
            type: "int32",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          actived: {
            type: "int32",
            id: 2
          },
          type: {
            type: "GameType",
            id: 3
          },
          countDown: {
            type: "int32",
            id: 4
          },
          encryptId: {
            type: "string",
            id: 5
          },
          innerIp: {
            type: "string",
            id: 6
          },
          chips: {
            rule: "repeated",
            type: "int32",
            id: 7
          },
          maxAll: {
            type: "int32",
            id: 8
          },
          limitId: {
            type: "int32",
            id: 9
          },
          videoInfo: {
            rule: "repeated",
            type: "VideoInfo",
            id: 10
          },
          videoPhoneInfo: {
            rule: "repeated",
            type: "VideoInfo",
            id: 11
          },
          videoH5Info: {
            rule: "repeated",
            type: "VideoInfo",
            id: 12
          },
          tableIndex: {
            type: "int32",
            id: 13
          },
          nickName: {
            type: "string",
            id: 14
          },
          tableType: {
            type: "int32",
            id: 15
          },
          videoControlInfo: {
            rule: "repeated",
            type: "VideoInfo",
            id: 16
          },
          tableSyncId: {
            type: "string",
            id: 17
          },
          featureId: {
            type: "string",
            id: 18
          },
          playTypeSwitch: {
            type: "int32",
            id: 19
          }
        }
      },
      AllTableRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      AllTableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "TableOptionInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      AllTableDetailRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          }
        }
      },
      AllTableDetailReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "TableInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      CreateTableRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "TableOptionInfo",
            id: 2
          }
        }
      },
      CreateTableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "TableOptionInfo",
            id: 1
          },
          errTableName: {
            type: "string",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              errorTableIndex: 2,
              errorInnerIp: 3,
              errSyncId: 4
            }
          }
        }
      },
      UpdateTableRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          info: {
            type: "TableOptionInfo",
            id: 2
          }
        }
      },
      UpdateTableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          errTableName: {
            type: "string",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              errorTableIndex: 2,
              errorInnerIp: 3,
              errSyncId: 4
            }
          }
        }
      },
      AllowTableBackRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          tableId: {
            type: "int32",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      AllowTableBackReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              NoGame: 2,
              NoTable: 3,
              errThrow: 10
            }
          }
        }
      },
      AsyncTableRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          tableSyncId: {
            type: "string",
            id: 1
          },
          tableId: {
            type: "int32",
            id: 2
          }
        }
      },
      AsyncTableReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "TableOptionInfo",
            id: 1
          },
          errTableName: {
            type: "string",
            id: 2
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              NoSyncId: 1,
              ErrSyncId: 2,
              NoTable: 3,
              SameTable: 4,
              ErrParam: 5,
              ErrThrow: 10
            }
          }
        }
      },
      DoAsyncRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          tableId: {
            type: "int32",
            id: 2
          },
          screenNum: {
            type: "int32",
            id: 3
          }
        }
      },
      DoAsyncReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          lastTime: {
            type: "int32",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1,
              errThrow: 10,
              errParams: 11
            }
          }
        }
      }
    }
  },
  transfer: {
    nested: {
      TransferInfo: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          state: {
            type: "int32",
            id: 3
          }
        }
      },
      LoginRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          }
        }
      },
      LoginReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            type: "TransferInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      RegisterRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          password: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          state: {
            type: "int32",
            id: 3
          }
        }
      },
      RegisterReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      UpdateRequest: {
        fields: {
          info: {
            type: "TransferInfo",
            id: 0
          }
        }
      },
      UpdateReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      },
      AllRequest: {
        fields: {
          account: {
            type: "string",
            id: 0
          },
          stateFilter: {
            type: "int32",
            id: 1
          }
        }
      },
      AllReplay: {
        fields: {
          result: {
            type: "Code",
            id: 0
          },
          info: {
            rule: "repeated",
            type: "TransferInfo",
            id: 1
          }
        },
        nested: {
          Code: {
            values: {
              Success: 0,
              Failed: 1
            }
          }
        }
      }
    }
  }
});

module.exports = $root;
